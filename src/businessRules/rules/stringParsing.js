/**
 * @file stringParsing.js
 * @module stringParsing
 * @description Contains all system defined business rules for parsing strings,
 * with values of all kinds, and various parsing operations.
 * @requires module:configurator
 * @requires module:arrayParsing
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Zhen Yu Zhou
 * @date 2026-02-24
 * @copyright Copyright © 2026-... by Zhen Yu Zhou. All rights reserved.
 */

let configurator = require('../../executrix/configurator');
let arrayParsing = require('./arrayParsing');
let D = require('../../structures/data');
let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = `businessRules.rules.${baseFileName}.`;

/**
 * @function parseSystemRootPath
 * @description Pareses the root path as returned by calling: path.resolve(__dirname);
 * This business rule looks for the "AppName" part of the path,
 * and will parse that out to determine where on the hard drive this "AppName" folder is installed at.
 * @NOTE the "AppName" is derived from the configuration setting called "applicationName"
 * which should have been set by the system when it was loaded.
 * @param {string} inputData The root path as defined by calling path.resolve(__dirname)
 * @param {string} inputMetaData The name of the application.
 * @return {string} A string with the path up to the application folder,
 * where ever that is installed on the local system currently executing.
 * @author Zhen Yu Zhou
 * @date 2026-02-25
 */
export const parseSystemRootPath = function(inputData, inputMetaData) {
    let functionName = parseSystemRootPath.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`inputData is: ${inputData}`);
    console.log(`inputMetaData is: ${inputMetaData}`);
    let returnData = '';
    if (inputData) {
        let applicationName = inputMetaData; // Rename it for readability
        let pathElements = inputData.split('\\');
        loop1:
            for (let i = 0; i < pathElements.length; i++) {
                console.log(`BEGIN iteration i: ${i}`);
                let pathElement = pathElements[i];
                console.log(`pathElement is: ${pathElement}`);
                if (i === 0) {
                    console.log('case: i === 0');
                    resolvedPath = pathElement;
                } else if (pathElement === applicationName) {
                    console.log(`case: pathElement === ${applicationName}`);
                    resolvedPath = resolvedPath + '\\' + pathElement + '\\';
                    break loop1;
                } else {
                    console.log('case else');
                    resolvedPath = resolvedPath + '\\' + pathElement;
                } 
            } // End-for (let i = 0; i < pathElements.length; i++)
    } // End-if (inputData)

    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
};

/**
 * @function stringToDataType
 * @description Converts a string to the appropriate data value.
 * So if it's a string value of "3.141592..." Then it will be converted to a floated of the same value.
 * If it's a string value of "false" then it will be converted to a boolean of the same value.
 * If it's a string value of "12" then it will be converted to an integer of the same value.
 * If it's a string value of "Happy Birthday" it will get returned the same as the input, no change, since it's just a string.
 * If it's an array of strings, or collection object, it will get returned as the same as the input, not change.
 * @param {string} inputData The string tha should be converted to some value.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {object|string|boolean|integer|float} Returns a value of whatever type the string should be converted to as appropriate.
 * @author Zhen Yu Zhou
 * @date 2026-02-25
 */
export const stringToDataType = function(inputData, inputMetaData) {
    let functionName = stringToDataType.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`inputData is: ${inputData}`);
    console.log(`inputMetaData is: ${inputMetaData}`);
    let returnData = '';
    if (inputData) {
        let dataType = determineObjectDataType(inputData, '');
        switch (dataType) {
            case 'Boolean':
                returnData = stringToBoolean(inputData, '');
                break;
            case 'Integer':
                returnData = parseInt(inputData, '');
                break;
            case 'Float':
                returnData = parseFloat(inputData, '');
                break;
            case 'String':
                returnData = inputData;
                break;
            default: // we don't know what kind of object this is, better just return it the way it is.
                returnData = inputData;
                break;
        } // End-switch (dataType)
    } // End-if (inputData)

    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
};

/**
 * @function stringToBoolean
 * @description Converts a string to a boolean value.
 * @param {string} inputData A string that contains a truthy or falsy value and should be converted to a boolean value.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A boolean value of either True or False according to the business rule conversion.
 * @author Zhen Yu Zhou
 * @date 2026-02-25
 * @NOTE We cannot pass in a 1 or 0 in this functions and expect it to evaluate as a True or False because:
 * We have another function that is passing strings into the function,
 * and also part of that check to look for data-types is a check to see if a string is a number.
 * If we cause this function to evaluate a 0 or 1 to a Boolean,
 * the the integer function would never get  a chance to evaluate.
 */
export const stringToBoolean = function(inputData, inputMetaData) {
    let functionName = stringToBoolean.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`inputData is: ${inputData}`);
    console.log(`inputMetaData is: ${inputMetaData}`);
    let returnData = false;
    if (inputData) {
        if (typeof inputData === 'boolean') {
            returnData = inputData;
        } else {
            switch (inputData.toLowerCase().trim()) {
                case 'true': case 't': case 'y': case 'yes': case 'on':
                    returnData = true;
                    break;
                case 'false': case 'f': case 'n': case 'no': case 'off':
                    returnData = false;
                    break;
                default:
                    returnData = false;
                    break;
            } // End-switch (inputData.toLowerCase().trim())
        } // End-if (typeof inputData === 'boolean')
    } // End-if (inputData)
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
};

/**
 * @function determineObjectDataType
 * @description Determines if the contents of a string are actually a Boolean, Integer, Float, String or something else.
 * @param {string} inputData A string that contains some value that we sohuld 
 * figure out what kind of data type that data is, Boolean, Integer, Float, String or something else.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string that indicates if the data type should be Boolean, Integer, Float, String or something else.
 * @author Zhen Yu Zhou
 * @date 2026-02-25
 */
export const determineObjectDataType = function(inputData, inputMetaData) {
    let functionName = determineObjectDataType.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`inputData is: ${inputData}`);
    console.log(`inputMetaData is: ${inputMetaData}`);
    let returnData = '';
    if (inputData) {
        if (isBooleanObject(inputData, '') === true) {
            returnData = 'Boolean';
        } else if (isIntegerObject(inputData, '') === true) {
            returnData = 'Integer';
        } else if (isFloatObject(inputData, '') === true) { 
            returnData = 'Float';
        } else if (isStringObject(inputData, '') === true) {
            returnData = 'String';
        } else { // Otherwise we cannot figure out what the data type is.
            // No real way to tell the difference between Short, Long, and Double.
            // At least not yet!
            returnData = 'Object';
        }
    } // End-if (inputData)
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
};

/**
 * @function isBoolean
 * @description Determines if the input string is a boolean type of value,
 * "true", "True", "t", "T", "y", "Y", "yes", "Yes", "on", "On" will all evaluate to True,
 * "false", "False", "f", "F", "n", "N", "no", "No", "off", "Off" will all evaluate to False.
 * @param {string} inputData The string that should be checked if it is a Boolean style value or not,
 * could be some form of "true" or "false".
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean vlaue of True or False to indicate if the input string is a Boolean or not.
 * @author Zhen Yu Zhou
 * @date 2026-02-25
 */
export const isBoolean = function(inputData, inputMetaData) {
    let functionName = isBoolean.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`inputData is: ${inputData}`);
    console.log(`inputMetaData is: ${inputMetaData}`);
    let returnData;
    if (inputData) {
        if (typeof inputData === 'boolean') {
            returnData = true;
        } else {
            inputData = inputData.toLowerCase().trim();
            if (inputData === 'true' || inputData === 't' || inputData === 'y' || inputData === 'yes' || inputData === 'on' ||
                inputData === 'false' || inputData === 'f' || inputData === 'n' || inputData === 'no' || inputData === 'off') {
                returnData = true;
            } else {
                returnData = false;
            }
        } // End-if (typeof inputData === 'boolean')
    } // End-if (inputData)
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
};

/**
 * @function isInteger
 * @description Determins if the input string is an integer type of value -9007299254740992 to 9007199254740992.
 * @param {string} inputData The string that should be checked if it is an interger stype value or not.
 * @param {string} inputMetaData Not used in this business rule.
 * @return {boolean} A Boolean value of True of False to indicatie if the input string is an integer or not.
 * @author Zhen Yu Zhou
 * @date 2026-02-25
 */
export const isInteger = function(inputData, inputMetaData) {
    let functionName = isInteger.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`inputData is: ${inputData}`);
    console.log(`inputMetaData is: ${inputMetaData}`);
    let returnData = false;
    if (inputData) {
        if (!isNaN(inputData)) {
            if (inputData % 1 === 0) {
                // It's a whole number, aka: integer
                returnData = true;
            } else { // Else clause is redundant, but kept here for code completeness.
                returnData = false;
            }
        } else { // Else clause is redundant, but kept here for code completeness.
            // Possibly also consol log here for debugging.
            returnData = false;
        }
    } // End-if (inputData)
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
};

/**
 * @function isFloat
 * @description Determines if the input string is a float type of value.
 * @param {string} inputData The string that should be checked if it is a float point value or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value of True or False to indicate if the input string is a float or not.
 * @author Zhen Yu Zhou
 * @date 2026-02-25
 */
export const isFloat = function(inputData, inputMetaData) {
    let functionName = isFloat.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`inputData is: ${inputData}`);
    console.log(`inputMetaData is: ${inputMetaData}`);
    let returnData = false;
    if (inputData) {
        if (!isNaN(inputData) && inputData.indexOf('.') !== -1) {
            returnData = true;
        } else {
            returnData = false;
        }
    } // End-if (inputData)
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
};

/**
 * @function isString
 * @description Determines if the input data is a string type of value or not, by process of elimination,
 * aka if it's not a Boolean, Integer, or Float, then it must be a String, or something else that we cannot identify.
 * @param {string} inputData The string that should be checked if it is a string type of value or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value of True or False to indicate if the input string is a string type of value or not.
 * @author Zhen Yu Zhou
 * @date 2026-02-25
 */
export const isString = function(inputData, inputMetaData) {
    let functionName = isString.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`inputData is: ${inputData}`);
    console.log(`inputMetaData is: ${inputMetaData}`);
    let returnData = false;
    if (inputData) {
        if (isBoolean(inputData, '') === false && isInteger(inputData, '') === false && isFloat(inputData, '') === false &&
    typeof inputData === 'string' || inputData) {
            returnData = true; // If it's not a Boolean, Integer, or Float, then it must be a String!
            // especially given the type of the variables is a string!
        } else {
            returnData = false;
        }
    } // End-if (inputData)
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
};

/**
 * @function singleQuoteSwapAfterEquals
 * @description Swaps single quote characters in the middle of the string with double quote characters in the middle of the string.
 * input: 'input[name='emailAddress'][class='username']'
 * output: 'input[name="emailAddress"][class="username"]'
 * @param {string} inputData A string that contains text with single quotes that should be swapped for double quotes
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string that contains text where single quotes have been exchanged for double quotes.
 * @author Zhen Yu Zhou
 * @date 2026-02-25
 */
export const singleQuoteSwapAfterEquals = function(inputData, inputMetaData) {
    let functionName = singleQuoteSwapAfterEquals.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`inputData is: ${inputData}`);
    console.log(`inputMetaData is: ${inputMetaData}`);
    let returnData = false;
    if (inputData) {
        if (inputData.includes('\'') === true) {
            // First replace all the quotes in the string with double quotes.
            // returnData = inputData.replace(/'/g, '"');
            returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/'/g, '"']);
            // Next replace the first and last double quote with single quote.
            if (returnData.indexOf('"') === 0) {
                // returnData = inputData.replace('"',, '\'');
                returnData = arrayParsing.replaceCharacterWithCharacter(inputData, ['"', '\'']);
            }
            if (returnData.charAt(returnData.length - 1) === '"') {
                returnData = returnData.slice(0, -1) + '\'';
            }
        } else {
            returnData = inputData;
        }
    } // End-if (inputData)
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
};

/**
 * @function swapForwardSlashWithBackSlash
 * @description Swaps all forward slash characters in the string with back slash characters.
 * @param {string} inputData A string that contains text with forward slashes that should be swapped for back slashes.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string that contains text where forward slashes have been exchanged for back slashes.
 * @author Zhen Yu Zhou
 * @date 2026-02-26
 */
export const swapForwardSlashWithBackSlash = function(inputData, inputMetaData) {
    let functionName = swapForwardSlashWithBackSlash.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`inputData is: ${inputData}`);
    console.log(`inputMetaData is: ${inputMetaData}`);
    let returnData = '';
    if (inputData) {
        returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/\//g, '\\']);
    } // End-if (inputData)
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
};

/**
 * @function swapBackSlashWithForwardSlash
 * @description Swaps all back slash characters in the string with forward slash characters.
 * @param {string} inputData A string that contains text with back slashes that should be swapped for forward slashes.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string that contains text where back slashes have been exchanged for forward slashes.
 * @author Zhen Yu Zhou
 * @date 2026-02-26
 */
export const swapBackSlashWithForwardSlash = function(inputData, inputMetaData) {
    let functionName = swapBackSlashWithForwardSlash.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`inputData is: ${inputData}`);
    console.log(`inputMetaData is: ${inputMetaData}`);
    let returnData = '';
    if (inputData) {
        returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/\\/g, '/']);
    } // End-if (inputData)
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
};

/**
 * @function swapDoubleForwardSlashWithSingleForwardSlash
 * @description Swaps all double forward slash characters in the string with single forward slash characters.
 * @param {string} inputData A string that contains text with double forward slashes that should be swapped for single forward slashes.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string that contains text where double forward slashes have been exchanged for single forward slashes.
 * @author Zhen Yu Zhou
 * @date 2026-02-26
 */
export const swapDoubleForwardSlashWithSingleForwardSlash = function(inputData, inputMetaData) {
    let functionName = swapDoubleForwardSlashWithSingleForwardSlash.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`inputData is: ${inputData}`);
    console.log(`inputMetaData is: ${inputMetaData}`);
    let returnData = '';
    if (inputData) {
        returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/\/\//g, '/']);
    } // End-if (inputData)
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
};

/**
 * @function swapDoubleBackSlashWithSingleBackSlash
 * @description Swaps all double back slash characters in the string with single back slash characters.
 * @param {string} inputData A string that contains text with double back slashes that should be swapped for single back slashes.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string that contains text where double back slashes have been exchanged for single back slashes.
 * @author Zhen Yu Zhou
 * @date 2026-02-26
 */
export const swapDoubleBackSlashWithSingleBackSlash = function(inputData, inputMetaData) {
    let functionName = swapDoubleBackSlashWithSingleBackSlash.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`inputData is: ${inputData}`);
    console.log(`inputMetaData is: ${inputMetaData}`);
    let returnData = '';
    if (inputData) {
        returnData = arrayParsing.replaceCharacterWithCharacter(inputData, [/\\\\/g, '\\']);
    } // End-if (inputData)
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
};

// **************************************
// Internal Function
// **************************************

/**
 * @function replaceCharacterAtIndexOfString
 * @description Replaces the character at a specified index with another character.
 * @param {string} originalString The string where the replaement should be made.
 * @param {integer} index The index of the character where the replacement should be made.
 * @param {string} replacement The character or string that shoudld be inserted at the specifed index.
 * @return {string} THe string after the replacement has been made.
 * @author Zhen Yu Zhou
 * @date 2026-02-26
 * @reference {@link https://stackoverflow.com/questions/1431094/how-do-i-replace-the-character-at-a-particular-index-in-javascript|How do I replace the character at a particular index in JavaScript? }
 */
const replaceCharacterAtIndexOfString = function(originalString, index, replacement) {
    let functionName = replaceCharacterAtIndexOfString.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`originalString is: ${originalString}`);
    console.log(`index is: ${index}`);
    console.log(`replacement is: ${replacement}`);
    let returnData = '';
    if (originalString != '' && index >= 0 && replacement != '') {
        returnData = originalString.substr(0, index) + replacement + originalString.substr(index + replacement.length);
    } // End-if (originalString != '' && index >= 0 && replacement != '')
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
};