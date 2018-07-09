/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
    var h = Number(hours);
    var m = Number(minutes);

    return h >= 0 && h < 24 && m >= 0 && m < 60;
};

