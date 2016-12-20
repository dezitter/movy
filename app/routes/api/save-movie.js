module.exports = function(req, res, next) {
    const movie = req.body;
    const store = req.app.get('store');
    const tmdb = req.app.get('tmdb');

    store.insert(movie, (err, movieDoc) => {
        if (err) return next(err);
        res.send(movieDoc);

        tmdb.movieDetails(movieDoc.id)
            .then(response => JSON.parse(response.body))
            .then(details => {
                store.update({ _id: movieDoc._id }, { $set: details });
            });
    });
};
