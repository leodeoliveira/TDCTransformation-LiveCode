const OVERNIGHT_FARE = 3.5;
const SUNDAY_FARE = 3;
const NORMAL_FARE = 2;
const START_OVERNIGHT = 22;
const END_OVERNIGHT = 6;
const SUNDAY_CODE = 0;

const calculateTrip = function (distance, date) {
    if (isOvernight(date)) return distance * OVERNIGHT_FARE;
    if (isSunday(date)) return distance * SUNDAY_FARE;
    return distance * NORMAL_FARE;
}

const isOvernight = function(date) {
    return date.getHours() > START_OVERNIGHT || date.getHours() < END_OVERNIGHT;
}

const isSunday = function(date) {
    return date.getDay() === SUNDAY_CODE;
}

module.exports = { calculateTrip }