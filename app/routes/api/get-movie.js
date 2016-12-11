module.exports = function(req, res, next) {
    const _id = req.params._id;
    const store = req.app.get('store');

    store.findOne({ _id}, (err, movieDoc) => {
        if (err) return next(err);
        res.send(movieDoc);
    });
};
