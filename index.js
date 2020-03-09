// Code your solution in this file!

function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [ returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(num){
    return function(multiplier){
        return num * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, arrayOfFunctions){
    for(const driver of selectingDrivers){
        if (driver === arrayOfFunctions){
          return  driver(drivers, arrayOfFunctions)
        }
    }
}