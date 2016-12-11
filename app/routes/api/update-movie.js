module.exports = function(req, res) {
    const _id = req.params._id;
    const patch = req.body;
    const store = req.app.get('store');

    store.update({ _id}, { $set: patch }, () => {
        store.findOne({ _id}, (err, movieDoc) => {
            res.send(movieDoc);
        });
    });
};
