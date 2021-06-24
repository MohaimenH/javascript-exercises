const removeFromArray = (arr, ...args) => {
    return arr.filter((elem) => args.includes(elem) == false);
};

module.exports = removeFromArray;