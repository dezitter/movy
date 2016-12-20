const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    const env = req.app.get('env');
    const movieStore = req.app.get('movie.store');
    const movyConfig = req.app.get('movy.config');

    movieStore.find(null)
         .sort({ createdAt: -1 })
         .limit(movyConfig.pager.limit)
         .exec((err, movies) => {
             if (err) return next(err);

             res.render('index', {
                 env,
                 title: 'Movy',
                 initialState: {
                     movies,
                     pager: movyConfig.pager
                 }
             });
         });
});

module.exports = router;
