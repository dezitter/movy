module.exports = function(req, res, next) {
    const _id = req.params._id;
    const movieStore = req.app.get('movie.store');

    movieStore.remove({ _id }, (err, numRemoved) => {
        if (err) return next(err);
        res.send({ numRemoved });
    });
};
