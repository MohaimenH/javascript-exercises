const leapYears = (year) => {
    return (year % 100 != 0 && year % 4 == 0) || (year % 400 == 0)
};

module.exports = leapYears;
