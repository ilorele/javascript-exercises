const getTheTitles = function(booksArr) {
    const titlesArr = [];

    booksArr.forEach(element => {
        titlesArr.push(element.title);
    });

    return titlesArr;
};

// Do not edit below this line
module.exports = getTheTitles;
