const returnFirstTwoDrivers = function(arr) {
  return arr.slice(0, 2)
}

const returnLastTwoDrivers = function(arr) {
  return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(i) {
  return function(fare){
    return fare * i
  }
}

const fareDoubler = function() {
  
}