function ModeActionFactory(Store) {

    class ModeAction {

        setMode(mode) {
            Store.setMode(mode);
        }
    }

    return new ModeAction();
}

module.exports = [
    'Store',
    ModeActionFactory
];
