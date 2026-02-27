/**
 * @file rulesLibrary.js
 * @module rulesLibrary
 * @description Contains all of the system defined business rules a map between
 * function name and functions calls.
 * @requires module:arrayParsing
 * @requires module:stringParsing
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Zhen Yu Zhou
 * @date 2026-02-24
 * @copyright Copyright © 2026-... by Zhen Yu Zhou. All rights reserved.
 */

let arrayParsing = require('./rules/arrayParsing');
let stringParsing = require('./rules/stringParsing');
let D = require('../structures/data');
let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = `businessRules.${baseFileName}.`;

/**
 * @function initRulesLibrary
 * @description Initializes the business rules function data structure on D.
 * @return {void}
 * @author Zhen Yu Zhou
 * @date 2026-02-24
 * @NOTE Please be aware that the commands and BusinessRules data filed in the
 * D-data structure are going to display as empty when printing out the 
 * D-data structure even when using JSON.stringify().
 * This is because the functions cannot really be serialized in any way.
 * It actually kind of make sense, but could be relly confusing if you are struggling,
 * trying to debug commands or business rules that do not appear to exist.
 */
export const initRulesLibrary = function() {
    let functionName = initRulesLibrary.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    D['businessRules'] = {};
    D['businessRules'] = {
        ['echo']: (inputData, inputMetaData) => console.log(JSON.stringify(inputData)),

        // Business Rules
        // **************************************************************************
        // arrayParsing rules in order
        // **************************************************************************
        ['replaceCharacterWithCharacter']: (inputData, inputMetaData) => arrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),

        // **************************************************************************
        // stringParsing rules in order
        // **************************************************************************
        ['parseSystemRootPath']: (inputData, inputMetaData) => stringParsing.parseSystemRootPath(inputData, inputMetaData),
        ['stringToDataType']: (inputData, inputMetaData) => stringParsing.stringToDataType(inputData, inputMetaData),
        ['stringToBoolean']: (inputData, inputMetaData) => stringParsing.stringToBoolean(inputData, inputMetaData),
        ['determineObjectType']: (inputData, inputMetaData) => stringParsing.determineObjectType(inputData, inputMetaData),
        ['isBoolean']: (inputData, inputMetaData) => stringParsing.isBoolean(inputData, inputMetaData),
        ['isInteger']: (inputData, inputMetaData) => stringParsing.isInteger(inputData, inputMetaData),
        ['isFloat']: (inputData, inputMetaData) => stringParsing.isFloat(inputData, inputMetaData),
        ['isString']: (inputData, inputMetaData) => stringParsing.isString(inputData, inputMetaData),
        ['singleQuoteSwapAfterEquals']: (inputData, inputMetaData) => stringParsing.singleQuoteSwapAfterEquals(inputData, inputMetaData),
        ['swapForwardSlashWithBackSlash']: (inputData, inputMetaData) => stringParsing.swapForwardSlashWithBackSlash(inputData, inputMetaData),
        ['swapBackSlashWithForwardSlash']: (inputData, inputMetaData) => stringParsing.swapBackSlashWithForwardSlash(inputData, inputMetaData),
        ['swapDoubleForwardSlashWithSingleForwardSlash']: (inputData, inputMetaData) => stringParsing.swapDoubleForwardSlashWithSingleForwardSlash(inputData, inputMetaData),
        ['swapDoubleBackSlashWithSingleBackSlash']: (inputData, inputMetaData) => stringParsing.swapDoubleBackSlashWithSingleBackSlash(inputData, inputMetaData),
    };
    console.log(`END ${namespacePrefix}${functionName} function`);
};