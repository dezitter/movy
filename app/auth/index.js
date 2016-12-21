const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function isPasswordValid(user, passwordCandidate) {
    return bcrypt.compareSync(passwordCandidate, user.password);
}

module.exports = function (userStore) {
    const strategy = new LocalStrategy(function(username, password, cb) {

        userStore.findOne({ username }, (err, user) => {
            if (err) return cb(err);
            if (!user) return cb(null, false);
            if (isPasswordValid(user, password) === false)  return cb(null, false);

            return cb(null, user);
        });
    });

    passport.serializeUser((user, cb) => cb(null, user._id));
    passport.deserializeUser((_id, cb) => findById(_id, cb));

    function findById(_id, cb) {
        userStore.findOne({ _id }, cb);
    }

    return strategy;
};
