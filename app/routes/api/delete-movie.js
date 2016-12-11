module.exports = function(req, res) {
    const _id = req.params._id;
    const store = req.app.get('store');

    store.remove({ _id }, (err, numRemoved) => {
        res.send({ numRemoved });
    });
};
