const leapYears = function(num1) {
    console.log(num1);
    if(((num1 % 4 === 0) && (num1 % 100 !== 0)) || (num1 % 400 == 0)) {
        return true
    }
    else {
        return false;
    }
}

// Do not edit below this line
module.exports = leapYears;
