const repeatString = (msg, n) => {

    if (n < 0) return "ERROR";
    
    let result = '';

    for (let i =0; i < n; i++) {
        result += msg;
    }

    return result;
}

module.exports = repeatString;
