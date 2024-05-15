const returnFirstTwoDrivers   = function (driver = ['Antonia', 'Nuru', 'Amari', 'Mo']){
const drivercopy =[...driver];
    return drivercopy.splice(0,2);
}

const returnLastTwoDrivers   = function (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']){
    const driverscopy =[...drivers];
    return driverscopy.splice(2,4);
    }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers ]


function createFareMultiplier(integer){
    return (x) => x * integer;
}

function fareDoubler(fare){
const more = createFareMultiplier(2);
return more(fare)
}

function fareTripler(fares){
    const more = createFareMultiplier(3);
    return more(fares)
    }

function  selectDifferentDrivers(drivers, callback){
 return callback(drivers)
}

// selectDifferentDrivers(drivers, returnFirstTwoDrivers)