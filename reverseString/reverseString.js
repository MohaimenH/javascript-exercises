const reverseString = (str) => {
    let len = str.length;
    let result = '';
    for (let i = len-1; i >= 0; i--) {
        result += str[i];
    }
    return result;
};

module.exports = reverseString;
