const findTheOldest = function(peopleArr) {
    const currentYear = (new Date).getFullYear();
    
    peopleArr.forEach(person => {
        if (!("yearOfDeath" in person)) {
            person.yearOfDeath = currentYear;
        }
    });

    peopleArr.sort((a, b) => {
        a = a.yearOfDeath - a.yearOfBirth;
        b = b.yearOfDeath - b.yearOfBirth;
        return a < b ? 1 : -1;
    });

    console.log(peopleArr);
    return peopleArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
