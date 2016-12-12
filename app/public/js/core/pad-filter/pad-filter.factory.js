function PadFilterFactory() {
    return function padFilter(value, size=2, symbol='0') {
        let prefix = '';
        const length = value.toString().length;

        if (length < size) {
            prefix = new Array(size - length).fill(symbol).join('');
        }

        return prefix + value;
    };
}

module.exports = PadFilterFactory;
