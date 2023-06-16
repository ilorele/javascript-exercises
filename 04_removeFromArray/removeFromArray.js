const removeFromArray = function(inputArray, ...removedItems) {
    const filteredArray = inputArray.filter(item => !removedItems.includes(item));
    console.log(filteredArray);
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
