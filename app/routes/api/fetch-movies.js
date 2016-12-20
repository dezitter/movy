module.exports = function(req, res, next) {
    const movieStore = req.app.get('movie.store');

    movieStore.find(null)
         .sort({ createdAt: -1 })
         .exec((err, movies) => {
             if (err) return next(err);
             res.send(movies);
         });
};
