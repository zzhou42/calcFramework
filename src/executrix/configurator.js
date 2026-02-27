/**
 * @file configurator.js
 * @module configurator
 * @description Contains the functions necessary to set and get configuration settings from the shared data structure.
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Zhen Yu Zhou
 * @date 2026/02/10
 * @copyright Copyright © 2026-... by Zhen Yu Zhou. All rights reserved.
 */

const { get } = require('http');
let D = require('../structures/data');
let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = `executrix.${baseFileName}.`;

/**
 * @function setConfigurationSetting
 * @description Sets a configuration setting on the configuration data structure stored on the D-data structure.
 * @param {array<string>} configurationNamespace The path in the configuration JSON object.
 * @param {string} configurationName The key of the configuration setting.
 * @param {string|integer|boolean|double} configurationValue THe value of the configuration setting.
 * @author Zhen Yu Zhou
 * @date 2026/02/10
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
function setConfigurationSetting(configurationNamespace, configurationName, configurationValue) {
    let functionName = setConfigurationSetting.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`configurationNamespace is: ${configurationNamespace}`);
    console.log(`configurationName is: ${configurationName}`);
    console.log(`configurationValue is: ${configurationValue}`);
    let namespaceConfigObject = getConfigurationNamespaceObject(configurationNamespace.split('.'));
    if (namespaceConfigObject) {
        namespaceConfigObject[`${configurationNamespace}.${configurationName}`] = configurationValue;
    }
    configurationDataRoot[configurationName] = configurationValue;
    console.log(`END ${namespacePrefix}${functionName} function`);
};

/**
 * @function getConfigurationSetting
 * @description Gets a configuration value based on the configuration name.
 * @param {array<string>} configurationNamespace The path in the configuration JSON object.
 * @param {string} configurationName The key of the configuration setting.
 * @returns {string|integer|boolean|double} The value of the configuration setting.
 * @author Zhen Yu Zhou
 * @date 2026/02/10
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
function getConfigurationSetting(configurationNamespace, configurationName) {
    let functionName = getConfigurationSetting.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`configurationNamespace is: ${configurationNamespace}`);
    console.log(`configurationName is: ${configurationName}`);
    let returnConfigurationValue;
    let namespaceConfigObject = undefined;
    namespaceConfigObject = getConfigurationNamespaceObject(configurationNamespace.split('.'));
    if (namespaceConfigObject) {
        if (configurationName) {
            if (configurationName.includes('@') && configurationName.indexOf('@') === 0) {
                returnConfigurationValue = getParentConfigurationNamespaceObject(configurationNamespace, configurationName);
            } else {
                returnConfigurationValue = namespaceConfigObject[`${configurationNamespace}.${configurationName}`];
            }
        } else {
            returnConfigurationValue = getParentConfigurationNamespaceObject(configurationNamespace, '');
        }
    } // End-if (namespaceConfigObject)
    console.log(`returnConfigurationValue is: ${returnConfigurationValue}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnConfigurationValue;
};

/**
 * @function processConfigurationNameRules
 * @description Processes a fully qualified name and extracts the configuration name without the namespace.
 * @param {string} fullyQualifiedName The fully qualified name with the namespace included.
 * @return {string} The name of the configuration setting without the namespace.
 * @author Zhen Yu Zhou
 * @date 2026/02/26
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
function processConfigurationNameRules(fullyQualifiedName) {
    let functionName = processConfigurationNameRules.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`fullyQualifiedName is: ${fullyQualifiedName}`);
    let returnValue;
    let fullyQualifiedNameArray = fullyQualifiedName.split('.');
    returnValue = fullyQualifiedNameArray[fullyQualifiedNameArray.length - 1];
    console.log(`returnValue is: ${returnValue}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnValue;
};

/**
 * @function processConfigurationNamespaceRules
 * @description Processed a fully qualified name and extracts the namespace portion.
 * @param {string} fullyQualifiedName The fully qualified name with the namespace included.
 * @return {string} The namespace of the configuration setting, without the configuration name.
 * @author Zhen Yu Zhou
 * @date 2026/02/26
 * @NOTE Cannot use the loggers here, because of a circular dependency. 
 */
function processConfigurationNamespaceRules(fullyQualifiedName) {
    let functionName = processConfigurationNamespaceRules.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`fullyQualifiedName is: ${fullyQualifiedName}`);
    let returnValue;
    returnValue = fullyQualifiedName.substring(0, fullyQualifiedName.lastIndexOf('.'));
    if (returnValue.includes('debugFunctions') || returnValue.includes('debugFiles')) {
        // We need to string off the "debugFunctions" & "debugFiles" prefixes along with th e pipe that delimites them.
        // At ssome point we might need thsese separate designations, like for the colorizer logic, but for now,
        // until there is a business need I will keep them unified.
        // Everything to the right all falls under the disignation of "debugSettings"
        // so tha as the base for the namespace tree should work perfectly.
        let parsedDebugSettingsNamespace = returnValue.split('.');
        returnValue = parsedDebugSettingsNamespace[1];
    }

    console.log(`returnValue is: ${returnValue}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnValue;
};

/**
 * @function processConfigurationValueRules
 * @description Processes a name and vlaue to execute required code and convert string values to actual
 * objects needed by the configuration system.
 * @param {string} name The name of the configuration variable without the namespace.
 * @param {string} value The value of the configuration variable.
 * @return {string|boolean|integer|float|object} A value that is appropriately processed.
 * @author Zhen Yu Zhou
 * @date 2026/02/26
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
function processConfigurationValueRules(name, value) {
    let functionName = processConfigurationNameRules.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`name is: ${name}`);
    console.log(`value is: ${value}`);
    let returnValue;
    switch (name) {
        case 'dateTimeStamp': case 'dateStamp': case 'timeStamp':
            // NOTE: All of these three configurations are processed exactly the same way.
            // As long as what is stored in the configuration file is correct, then they should be processed correctly.
            returnValue = TimeRanges.getNowMoment(value);
            break;
        default: // We dont know what the value is.
            // We have to just return the value as it was passed in, no processing.
            // We don't want to corrupt the other data that may be passed into this functions.
            returnValue = value;
            break;
    }
    console.log(`returnValue is: ${JSON.stringify(returnValue)}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnValue;
};

/**
 * @function getParentConfigurationNamespaceObject
 * @description Navigates the configuration JSON data object tree to find the namespace of the configuration setting,
 * and then determins the parent and returns the entire tree of the configuration data\
 * including that parent and all its top level contents.
 * @param {string} configurationNamespace The fully qualified path in the configuration JSON object
 * @param {string} optionalFunctionNameAppendix An optional function name appendix that could
 * potentailly be added to the end of the funciton name.
 * Ex: @ModuleFontBackgroundColor
 * @return {object|boolean} The parent of the object found at the specified namespace address in the
 * configuration data object, or false if nothing was found.
 * @author Zhen Yu Zhou
 * @date 2026/02/26
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
function getParentConfigurationNamespaceObject(configurationNamespace, optionalFunctionNameAppendix) {
    let functionName = getParentConfigurationNamespaceObject.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`configurationNamespace is: ${configurationNamespace}`);
    console.log(`optionalFunctionNameAppendix is: ${optionalFunctionNameAppendix}`);
    let returnValue = true;
    let parentConfigurationNamespaceArray = configurationNamespace.split('.');
    let newParentConfigurationName = parentConfigurationNamespaceArray.pop();
    let newParentConfigurationNamespace = parentConfigurationNamespaceArray.join('.');
    let parentNamespaceConfigObject = getConfigurationNamespaceObject(parentConfigurationNamespaceArray);
    if (optionalFunctionNameAppendix !== '') {
        returnValue = parentNamespaceConfigObject[`${newParentConfigurationNamespace}.${newParentConfigurationName}${optionalFunctionNameAppendix}`];
    } else {
        returnValue = parentNamespaceConfigObject[`${newParentConfigurationNamespace}.${newParentConfigurationName}`];
    }
    console.log(`returnValue is: ${JSON.stringify(returnValue)}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnValue;
};

/**
 * @function getConfigurationNamespaceObject
 * @description Navigatest the configuration JSON data object tree to find the namespace of configuration setting.
 * @param {array<string>} configurationNamespace The path in the configuration JSON object where the 
 * configuration settings should be set, or returned
 * @return {object|boolean} The object found at the specified namespace address in the configuration data object,
 * or false iif nothign was found.
 * @author Zhen Yu Zhou
 * @date 2026/02/26
 * @NOTE Cannot use the loggers here, because of a circular dependency.
 */
function getConfigurationNamespaceObject(configurationNamespace) {
        let functionName = getConfigurationNamespaceObject.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`configurationNamespace is: ${configurationNamespace}`);
    let returnValue = true;
    let configurationDataRoot = D['configuration'];
    let configurationPathObject = configurationDataRoot;
    if (!configurationPathObject) {
        // Need to handle the case that the configuration data object doesn't even exist.
        D['configuration'] = {};
        configurationDataRoot = D['configuration'];
        configurationPathObject = configurationDataRoot;
    } // End-if (!configurationPathObject)
    for (let i = 0; i < configurationNamespace.length; i++) {
        if (!configurationPathObject[configurationNamespace[i]]) {
            // It doesn't exist yet, so we need to create it.
            configurationPathObject[configurationNamespace[i]] = {};
        } // End-if (!configurationPathObject[configurationNamespace[i]])
        configurationPathObject = configurationPathObject[configurationNamespace[i]];
    } // End-for (let i = 0; i < configurationNamespace.length; i++)
    returnValue = configurationPathObject;
    console.log(`returnValue is: ${returnValue}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return returnValue;
};

module.exports = {
    ['setConfigurationSetting']: (configurationNamespace, configurationName, configurationValue) => 
        setConfigurationSetting(configurationNamespace, configurationName, configurationValue),
    ['getConfigurationSetting']: (configurationNamespace, configurationName) => 
        getConfigurationSetting(configurationNamespace, configurationName),
    ['processConfigurationNameRules']: (fullyQualifiedName) => processConfigurationNameRules(fullyQualifiedName),
    ['processConfigurationNamespaceRules']: (fullyQualifiedName) => processConfigurationNamespaceRules(fullyQualifiedName),
    ['processConfigurationValueRules']: (name, value) => processConfigurationValueRules(name, value)
};