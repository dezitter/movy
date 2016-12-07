function PagerActionFactory(Store) {

    class PagerAction {

        nextPage() {
            Store.incCurrentPage();
        }

        previousPage() {
            Store.decCurrentPage();
        }

        updatePager(patch) {
            Store.updatePager(patch);
        }
    }

    return new PagerAction();
}

module.exports = [
    'Store',
    PagerActionFactory
];
