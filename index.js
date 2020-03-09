// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
    return array.slice(0,2)
};

const returnLastTwoDrivers = function(array) {
    return array.slice(array.length-2, array.length)
};

function createFareMultiplier(multiple){
    return function multiply(number) {return number * multiple}
};

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function selectDifferentDrivers(drivers, run_this) {
    return run_this(drivers)

}