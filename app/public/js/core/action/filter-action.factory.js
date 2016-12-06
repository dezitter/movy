function FilterActionFactory(Store) {

    class FilterAction {

        clear() {
            Store.clearFilter();
        }
    }

    return new FilterAction();
}

module.exports = [
    'Store',
    FilterActionFactory
];
