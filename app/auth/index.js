const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

function isPasswordValid(user, password) {
    return user.password === password;
}

module.exports = function (userStore) {
    const strategy = new LocalStrategy(function(username, password, cb) {

        userStore.findOne({ username }, (err, user) => {
            if (err) return cb(err);
            if (!user) return cb(null, false);
            if (!isPasswordValid(user, password))  return cb(null, false);

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
