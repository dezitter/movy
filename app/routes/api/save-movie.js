module.exports = function(req, res) {
    const movie = req.body;
    const store = req.app.get('store');

    store.insert(movie, (err, movieDoc) => {
        res.send(movieDoc);
    });
};
