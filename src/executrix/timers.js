/**
 * @file timers.js
 * @module timers
 * @description Contains all of the functions needed for generating time stamps,
 * reformatting time stamps and trcking time durations.
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires {@link https://www.npmjs.com/package/moment|moment}
 * @author Zhen Yu Zhou
 * @date 2026/02/20
 * @copyright Copyright © 2026-... by Zhen Yu Zhou. All rights reserved.
 */

let path = require('path');
let moment = require('moment');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = `executrix.${baseFileName}.`;

/**
 * @function getNowMoment
 * @description Returns a time stamp string formatted according to the input formatting string.
 * @param {string} formatting The formatting string, that tells moment in what format to
 * return the value for the day, month, year, hour, minute, second, millisecond.
 * @returns {string} A time stamp string that has been formatted according to the input format.
 * @author Zhen Yu Zhou
 * @date 2026/02/20
 */
function getNowMoment(formatting) {
    let functionName = getNowMoment.name;
    // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    // console.log(`formatting is: ${formatting}`);
    let returnData = '';
    returnData = moment().format(formatting);
    // console.log(`returnData is: ${returnData}`);
    // console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
};

/**
 * @function computeDeltaTime
 * @description Computes the delta time between two time stamps.
 * @param {string} startTime The start of the time period that shuold be computed.
 * @param {string} endTime The end of the time period that should be computed
 * @return {integer} The difference between the beginning time and ending time in milliseconds.
 * @author Zhen Yu Zhou
 * @date 2026/02/20
 */
function computeDeltaTime(startTime, endTime) {
    let functionName = computeDeltaTime.name;
    // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    // console.log(`startTime is: ${startTime}`);
    // console.log(`endTime is: ${endTime}`);
    let returnData = '';

    // console.log(`returnData is: ${returnData}`);
    // console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
};

module.exports = {
    ['getNowMoment']: (formatting) => getNowMoment(formatting),
    ['computeDeltaTime']: (startTime, endTime) => computeDeltaTime(startTime, endTime)
};