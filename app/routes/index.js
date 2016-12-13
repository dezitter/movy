const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const env = req.app.get('env');

    res.render('index', {
        env,
        title: 'Movy'
    });
});

module.exports = router;
