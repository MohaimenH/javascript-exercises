const sumAll = (a, b) => {

    if (a < 0 || b < 0 || typeof(a) != 'number' || typeof(b) != 'number') {
        return "ERROR";
    }

    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    let result = 0;
    for (let i = a; i <= b; i++) {
        result += i;
    }
    return result;
};

module.exports = sumAll;
