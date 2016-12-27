const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/is-authenticated');

router.get('/', isAuthenticated, (req, res, next) => {
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

router.get('/details/:_id', isAuthenticated, (req, res, next) => {
    const _id = req.params._id;
    const env = req.app.get('env');
    const movieStore = req.app.get('movie.store');
    const movyConfig = req.app.get('movy.config');

    movieStore.findOne({ _id }, (err, movieDoc) => {
        if (err) return next(err);
        if (!movieDoc) return new new Error('Not found');

        res.render('details', {
            env,
            title: `Movy - ${movieDoc.title}`,
            initialState: {
                movies: [movieDoc],
                pager: movyConfig.pager
            }
        });
    });
});

module.exports = router;
