/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    var setHours;
    var setMinutes;
    var totalMinutes = minutes + interval;
    var newHours = (hours + Math.floor(totalMinutes / 60)) % 24;
    var leftoverMinutes = totalMinutes % 60;

    if (newHours < 10) {
        setHours =  '0' + newHours;
    }
    else {
        setHours = newHours;
    }
    if (leftoverMinutes < 10) {
        setMinutes = '0' + leftoverMinutes;

    }
    else {
        setMinutes = leftoverMinutes;
    }

    var newTime = setHours + ':' + setMinutes;

    return newTime;
};
