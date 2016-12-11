module.exports = function(req, res, next) {
    const _id = req.params._id;
    const store = req.app.get('store');

    store.remove({ _id }, (err, numRemoved) => {
        if (err) return next(err);
        res.send({ numRemoved });
    });
};
