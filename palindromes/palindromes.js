const palindromes = (str) => {
    let str1 = "";
    let str2 = "";

    for (let i = 0; i < str.length; i++) {
        if (isAlpha(str[i])) str1 += str[i];
    }

    for (let i = str1.length - 1; i >= 0; i--) {
        str2 += str1[i];
    }

    return str1.toLowerCase() == str2.toLowerCase();
};

const isAlpha = (str) => {
    return /^[a-zA-Z]+$/.test(str);
  }

module.exports = palindromes;
