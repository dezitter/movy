const express = require('express');
const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', (req, res, next) => {
    const userStore = req.app.get('user.store');
    const { username, password } = req.body;

    userStore.insert({ username, password  }, insertCallback);

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
