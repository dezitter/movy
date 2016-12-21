const passport = require('passport');

module.exports = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: 'Could not log you in, please verify your username/password.'
});
