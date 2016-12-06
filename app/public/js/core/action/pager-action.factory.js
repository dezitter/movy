function PagerActionFactory(Store) {

    class PagerAction {

        nextPage() {
            Store.incCurrentPage();
        }

        previousPage() {
            Store.decCurrentPage();
        }
    }

    return new PagerAction();
}

module.exports = [
    'Store',
    PagerActionFactory
];
