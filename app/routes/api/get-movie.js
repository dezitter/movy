module.exports = function(req, res, next) {
    const _id = req.params._id;
    const movieStore = req.app.get('movie.store');

    movieStore.findOne({ _id}, (err, movieDoc) => {
        if (err) return next(err);
        res.send(movieDoc);
    });
};
