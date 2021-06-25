const getTheTitles = (arr) => {
    let result = [];
    arr.forEach((element) => {
        result.push(element.title);
    });
    return result;
};

module.exports = getTheTitles;
