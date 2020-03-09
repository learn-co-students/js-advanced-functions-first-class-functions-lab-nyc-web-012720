// Code your solution in this file!


const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2)
}
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (x) => {
    return function multiplier(y) {
        return x * y
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers = returnLastTwoDrivers) => {
    return returnFirstTwoDrivers(drivers)
}