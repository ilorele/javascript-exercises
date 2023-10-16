const fibonacci = function(index) {
    if (index < 0) {
        return "OOPS";
    }

    const fibonacciArr = [0, 1];

    for (i = 1; i < index; i++) {
        fn = fibonacciArr[fibonacciArr.length - 2] + fibonacciArr[fibonacciArr.length -1];
        // console.log("fn: " + fn);
        fibonacciArr.push(fn);
    }

    return fibonacciArr[fibonacciArr.length -1];
};

// Do not edit below this line
module.exports = fibonacci;
