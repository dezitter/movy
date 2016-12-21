const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authenticate');

router.get('/login', (req, res) => {
    const error = req.flash('error');

    res.render('login', { error });
});

router.post('/login', authenticate);

module.exports = router;
