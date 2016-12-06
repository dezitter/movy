function PagerActionFactory(Store) {

    class PagerAction {

        nextPage() {
            Store.pager.current += 1;
        }

        previousPage() {
            Store.pager.current -= 1;
        }
    }

    return new PagerAction();
}

module.exports = [
    'Store',
    PagerActionFactory
];
