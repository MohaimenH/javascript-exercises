const findTheOldest = (arr) => {
    let max = -1;
    let maxElem = arr[0];
    arr.reduce((lastElem, currentElem) => {

        let currentDate = new Date();

        if (!lastElem.yearOfDeath) lastElem.yearOfDeath = currentDate.getFullYear();
        if (!currentElem.yearOfDeath) currentElem.yearOfDeath = currentDate.getFullYear();

        if (lastElem.yearOfDeath - lastElem.yearOfBirth > max) {
            max = lastElem.yearOfDeath - lastElem.yearOfBirth;
            maxElem = lastElem;
        }
        if (currentElem.yearOfDeath - currentElem.yearOfBirth > max) {
            max = currentElem.yearOfDeath - currentElem.yearOfBirth;
            maxElem = currentElem;
        };
        return maxElem;
    });
    return maxElem;
};

module.exports = findTheOldest;
