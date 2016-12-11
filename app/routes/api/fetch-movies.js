module.exports = function(req, res, next) {
    const store = req.app.get('store');

    store.find(null)
         .sort({ createdAt: -1 })
         .exec((err, movies) => {
             if (err) return next(err);
             res.send(movies);
         });
};
