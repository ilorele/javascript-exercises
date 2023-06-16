const sumAll = function(firstNumber, secondNumber) {
    let sum = 0;
    let smallerNumber = firstNumber;
    let biggerNumber = secondNumber;
    
    if (smallerNumber < 0 || biggerNumber <0) {
        return 'ERROR';
    }
    
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        return 'ERROR';
    }

    if (firstNumber > secondNumber) {
        smallerNumber = secondNumber;
        biggerNumber = firstNumber;
    }
   

    for (i = smallerNumber; i <= biggerNumber; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
