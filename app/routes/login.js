const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authenticate');

router.get('/login', (req, res) => {
    res.render('login', {
        message: req.flash('error')
    });
});

router.post('/login', authenticate);

module.exports = router;
