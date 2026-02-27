/**
 * @file arrayParsing.js
 * @module arrayParsing
 * @description Contains all system defining business rules for parsing arrays with various operations.
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Zhen Yu Zhou
 * @date 2026-02-24
 * @copyright Copyright © 2026-... by Zhen Yu Zhou. All rights reserved.
 */

let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = `businessRules.rules.${baseFileName}.`;

/**
 * @function replaceCharacterWithCharacter
 * @description Replaces all of the specified character in the inputData with another specified character.
 * @param {string} inputData A string that may or may not contain the specified character(s)
 * that shoujld be converted to another specified character.
 * @param {array<string,string>} inputMetaData An array of data that contains 2 additional string parameters
 * inputMetaData[0] = character2Find - The character to be searched and replaced from the input string.
 * inputMetaData[1] = character2Replace - The character that should be used to replace
 * the character specified for replacement from the input data.
 * @return {string} The same as the input string but with specifed characters converted to the other specified character.
 * @author Zhen Yu Zhou
 * @date 2026-02-24
 */
export const replaceCharacterWithCharacter = function(inputData, inputMetaData) {
    let functionName = replaceCharacterWithCharacter.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`inputData is: ${inputData}`);
    console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
    let returnData;
    let character2Find = inputMetaData[0];
    let character2Replace = inputMetaData[1];
    if (!inputData && !character2Find && !character2Replace) {
        returnData = false;
    } else {
        returnData = inputData.replace(character2Find, character2Replace);
    }
    console.log(`returnData is: ${returnData}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnData;
};