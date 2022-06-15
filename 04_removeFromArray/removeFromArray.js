const removeFromArray = function(array, ...args) {
    //The filter method creates a new array if the function inside of its () passes. -Marcelee
    return array.filter(x => !args.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
