const express = require('express');
const router = express.Router();

router.get('/movies', (req, res) => {
    res.type('json')
       .send([
            { title: 'foo' },
            { title: 'bar' },
            { title: 'quz' }
       ]);
});

module.exports = router;

