function FilterActionFactory(Store) {

    class FilterAction {

        clear() {
            Store.filter.title = '';
        }
    }

    return new FilterAction();
}

module.exports = [
    'Store',
    FilterActionFactory
];
