module.exports = function(req, res, next) {
    const movie = req.body;
    const store = req.app.get('store');

    store.insert(movie, (err, movieDoc) => {
        if (err) return next(err);
        res.send(movieDoc);
    });
};
