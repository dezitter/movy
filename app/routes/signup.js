const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.get('/signup', (req, res) => {
    const error = req.flash('error');

    res.render('signup', { error });
});

router.post('/signup', (req, res, next) => {
    const userStore = req.app.get('user.store');
    const { username, password } = req.body;

    userStore.findOne({ username }, findCallback);

    function findCallback(err, user) {
        if (err) return next(err);
        if (user) {
            req.flash('error', `The "${username}" username is already taken.`);
            return res.redirect('/signup');
        }

        userStore.insert({
            username,
            password: bcrypt.hashSync(password, 10)
        }, insertCallback);
    }

    function insertCallback(err, user) {
        if (err) return next(err);
        req.login(user, loginCallback);
    }

    function loginCallback(err) {
        if (err) return next(err);
        res.redirect('/');
    }
});

module.exports = router;
