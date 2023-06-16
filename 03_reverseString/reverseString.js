const reverseString = function(text) {
    const arrayReversed = [];
    for (item of text) {
        arrayReversed.unshift(item);
    }
    const arrayReversedToString = arrayReversed.join("");
    return arrayReversedToString;
};
// Do not edit below this line
module.exports = reverseString;
