module.exports = function(req, res, next) {
    const _id = req.params._id;
    const patch = req.body;
    const movieStore = req.app.get('movie.store');

    movieStore.update({ _id}, { $set: patch }, (err) => {
        if (err) return next(err);

        movieStore.findOne({ _id}, (err, movieDoc) => {
            if (err) return next(err);
            res.send(movieDoc);
        });
    });
};
