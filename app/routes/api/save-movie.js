module.exports = function(req, res, next) {
    const movie = req.body;
    const movieStore = req.app.get('movie.store');
    const tmdb = req.app.get('tmdb');

    movieStore.insert(movie, (err, movieDoc) => {
        if (err) return next(err);
        res.send(movieDoc);

        tmdb.movieDetails(movieDoc.id)
            .then(response => JSON.parse(response.body))
            .then(details => {
                movieStore.update({ _id: movieDoc._id }, { $set: details });
            });
    });
};
