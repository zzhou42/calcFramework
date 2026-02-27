/**
 * @file ruleBroker.js
 * @module ruleBroker
 * @description Contains all the functions necessary to mange the busness rules system.
 * @requires module:rulesLibrary
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Zhen Yu Zhou
 * @date 2026-02-23
 * @copyright Copyright © 2026-... by Zhen Yu Zhou. All rights reserved.
 */

import * as rules from '../businessRules/rulesLibrary';
let D = require('../structures/data');
let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = `brokers.${baseFileName}.`;

/**
 * @function bootStrapBusinessRules
 * @description Captures all of the business rule string-to-function call map data in
 * the rulesLibrary and migrate that data to the D-data structure.
 * This is important now because wew are going to allow the client to define their own
 * So we need a way to merge all client defined and system defined business rules into one location.
 * The rule broker will execute business rules from the D-data structure and not the rules library per-say
 * Thie will allow the systhem to expand much more dynamically and even be user-defined & flexible to client needs.
 * @return {void}
 * @author Zhen Yu Zhou
 * @date 2026-02-23 
 */
function bootStrapBusinessRules() {
    let functionName = bootStrapBusinessRules.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    rules.initRulesLibrary();
    console.log(`END ${namespacePrefix}${functionName} function`);
};

/**
 * @function addClientRules
 * @description Merges client defined business rules with the system defined business rules.
 * @param {Array<object>} clientRules The client business rules that shuold be merged with the system rules.
 * @return {void}
 * @author Zhen Yu Zhou
 * @date 2026-02-24
 */
function addClientRules(clientRules) {
    let functionName = addClientRules.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    Object.assign(D['businessRules'], clientRules);
    console.log(`END ${namespacePrefix}${functionName} function`);
};

/**
 * @function processRules
 * @description Parse the given input Object/String/Integer/Data/Function through a set of business rules,
 * (Some rules do not support chaining); where the rules defind tin the input rules array.
 * @param {string|integer|boolean|object|function} inputData The primary input data
 * that should be processed by the business rule(s)
 * @param {string|integer|boolean|object|function} inputMetaData Additional meta-data that
 * should be used when processing the business rule.
 * @param {array<string>} rulesToExecute The name(s) of the rule(s) that should be executed for modding the input data.
 * @return {string|integer|boolean|object|function} A modified data object/string/integer/boolean/function,
 * where the data has been modified based on the input data, input meta-data, and business rule that was executed.
 * @author Zhen Yu Zhou
 * @date 2026-02-24
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
function processRules(inputData, inputMetaData, rulesToExecute) {
        let functionName = processRules.name;
        console.log(`BEGIN ${namespacePrefix}${functionName} function`);
        console.log(`inputData is: ${JSON.stringify(inputData)}`);
        console.log(`inputMetaData is: ${JSON.stringify(inputMetaData)}`);
        console.log(`rulesToExecute is: ${JSON.stringify(rulesToExecute)}`);
        let returnData = inputData;
        if (rulesToExecute) {
            for (let rule in rulesToExecute) {
                if (rulesToExecute.hasOwnProperty(rule)) {
                    let key = rule;
                    console.log(`key is: ${key}`);
                    let value = rulesToExecute[key];
                    console.log(`value is: ${value}`);
                    returnData = D['businessRules'][vau](returnData, inputMetaData);
                } // End-if (rulesToExecute.hasOwnProperty(rule))
            } // End-for (let rule in rulesToExecute)
        } // End-if (rulesToExecute)
        console.log(`returnData is: ${JSON.stringify(returnData)}`);
        console.log(`END ${namespacePrefix}${functionName} function`);
        return returnData;
};

module.exports = {
    ['bootStrapBusinessRules']: () => bootStrapBusinessRules(),
    ['addClientRules']: (clientRules) => addClientRules(clientRules),
    ['processRules']: (inputData, inputMetaData, rulesToExecute) => processRules(inputData, inputMetaData, rulesToExecute)
}