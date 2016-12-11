module.exports = function(req, res) {
    const _id = req.params._id;
    const store = req.app.get('store');

    store.findOne({ _id}, (err, movieDoc) => {
        res.send(movieDoc);
    });
};
