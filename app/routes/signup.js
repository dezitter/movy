const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', (req, res, next) => {
    const userStore = req.app.get('user.store');
    const { username, password } = req.body;

    userStore.insert({
        username,
        password: bcrypt.hashSync(password, 10)
    }, insertCallback);

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
