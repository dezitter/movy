const Tmdb = require('tmdb-v3');

/**
 * Proxy the Tmdb API to add rate limit.
 *
 * Limitation set to 40 requests every 10 seconds.
 * See https://developers.themoviedb.org/3/getting-started/request-rate-limiting
 */
function TmdbThrottler(options) {
    const tmdb = new Tmdb(options);

    const ATTEMPT_LIMIT = 2;
    const RATELIMIT_DELAY = 10000;
    const RATELIMIT_LIMIT = 40;
    const RATELIMIT_REACHED_STATUS_CODE = 429;

    let pendings = [];

    let timeoutID = null;
    let remaining = RATELIMIT_LIMIT;
    let firstRequestStartTime = null;

    const handler = {
        get: function(target, property) {
            return intercept;

            function intercept(...args) {
                return processOne(target, property, args);
            }
        }
    };

    return new Proxy(tmdb, handler);

    function processOne(...args) {
        if (remaining > 0) {
            return apply(...args);
        } else {
            return enqueue(...args);
        }
    }

    function apply(target, property, args, attempts=1) {
        let promise = target[property].apply(target, args);

        remaining = remaining - 1;

        return promise
            .then(onResolve)
            .catch(onReject);

        function onResolve(response) {
            updateBucketTimer();
            return response;
        }

        function onReject(error) {
            const hasReachedRateLimit = (error.statusCode === RATELIMIT_REACHED_STATUS_CODE);

            updateBucketTimer();

            if (hasReachedRateLimit && attempts < ATTEMPT_LIMIT) {
                return enqueue(target, property, args, attempts + 1);
            } else {
                throw error;
            }
        }
    }

    function updateBucketTimer() {
        if (firstRequestStartTime === null) {
            firstRequestStartTime = Date.now();
        }

        if (remaining === 0) {
            timeout();
        }
    }

    function enqueue(target, property, args, attempts=1) {
        return new Promise(executor);

        function executor(resolve, reject) {
            pendings.push({ target, property, args, resolve, reject, attempts });
        }
    }

    function timeout() {
        const timeElapsedInBucket = Date.now() - firstRequestStartTime;
        const remainingTimeToWait = RATELIMIT_DELAY - timeElapsedInBucket;

        if (!timeoutID) {
            timeoutID = global.setTimeout(onTimeout, remainingTimeToWait);
        }

        function onTimeout() {
            resetTimer();
            processQueue();
        }
    }

    function resetTimer() {
        timeoutID = null;
        remaining = RATELIMIT_LIMIT;
        firstRequestStartTime = null;
    }

    function processQueue() {
        while(remaining > 0 && pendings.length > 0) {
            let { target, property, args, resolve, reject, attempts } = pendings.shift();

            processOne(target, property, args, attempts)
                .then(resolve)
                .catch(reject);
        }
    }
}

module.exports = TmdbThrottler;
