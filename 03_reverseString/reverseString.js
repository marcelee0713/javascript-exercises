const reverseString = function(word) {
    let wordLetters = word.split("");
    let reverseArray = wordLetters.reverse();
    let string = reverseArray.join("");
    return string;
};

// Do not edit below this line
module.exports = reverseString;
