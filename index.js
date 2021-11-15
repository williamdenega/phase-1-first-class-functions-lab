// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => [drivers[0], drivers[1]]


const returnLastTwoDrivers= (drivers) => [drivers[drivers.length-2],drivers[drivers.length-1]];


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]


const createFareMultiplier = function (multiplier){
    return function fareMultiplier(a){
        return multiplier*a;
        
    }

}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);
/*const fareDoubler = function (fairs){
    return fairs+fairs;

}

const fareTripler = function (fairs){
    return fairs*3;
}
*/
const selectDifferentDrivers = function (drivers, functionCall){
    return functionCall(drivers);

}