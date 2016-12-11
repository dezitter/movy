module.exports = function(req, res) {
    const store = req.app.get('store');

    store.find(null)
         .sort({ createdAt: -1 })
         .exec((err, movies) => {
             res.send(movies);
         });
};
