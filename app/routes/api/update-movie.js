module.exports = function(req, res, next) {
    const _id = req.params._id;
    const patch = req.body;
    const store = req.app.get('store');

    store.update({ _id}, { $set: patch }, (err) => {
        if (err) return next(err);

        store.findOne({ _id}, (err, movieDoc) => {
            if (err) return next(err);
            res.send(movieDoc);
        });
    });
};
