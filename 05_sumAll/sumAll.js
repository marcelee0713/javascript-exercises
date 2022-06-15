const sumAll = function(num1, num2) {
    let result = 0;
    if(num1 > 0 && num2 > 0 && typeof num1 === 'number' && typeof num2 === 'number'){
        if(num1 < num2){
            while(num1 <= num2){
                result = result + num1
                num1++
            }
        }
        else{
            while(num1 >= num2){
                result = result + num2;
                num2++;
            }
            return result;
        }
        return result;
    }
    return 'ERROR';

};

// Do not edit below this line
module.exports = sumAll;
