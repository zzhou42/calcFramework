/**
 * @file chiefData.js
 * @module chiefData
 * @description Contains all the functionst to manage the loading and processing of data,
 * such as XML files, CSV files, JSON files. Additional file type processing should be added in this module.
 * @requires module:dataBroker
 * @requires module:configurator
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Zhen Yu Zhou
 * @date 2026/02/08
 * @copyright Copyright © 2026-... by Zhen Yu Zhou. All rights reserved.
 */

let dataBroker = require('../brokers/dataBroker');
let configurator = require('../executrix/configurator');
let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = `controllers.${baseFileName}.`;

/**
 * @function setupAllJsonConfigData
 * @description Sets up all of the JSON data at the specified configuration path.
 * @param {string} dataPathConfigurationName The name of the configuration setting that has the path we should search.
 * @param {string} contextName The context name that should be used when adding data to the D data structure.
 * @return {object} A JSON object that contains all of the data that was loaded and merged together.
 * @author Zhen Yu Zhou
 * @date 2026/02/08
 */
function setupAllJsonConfigData(dataPathConfigurationName, contextName) {
    let functionName = setupAllJsonConfigData.name;
    // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    // console.log(`dataPathConfiguration is: ${dataPathConfigurationName}`);
    // console.log(`contextName is: ${contextName}`);
    let loadedAndMergedDataAllFiles = {};
    let dataPath = configurator.getConfigurationSetting(dataPathConfigurationName);
    dataPath = path.resolve(dataPath);
    let filesToLoad = dataBroker.scanDataPath(dataPath, contextName);
    loadedAndMergedDataAllFiles = dataBroker.loadAllJsonData(filesToLoad, contextName);
    // console.log(`loadedAndMergedDataAllFiles is: ${JSON.stringify(loadedAndMergedDataAllFiles)}`);
    // console.log(`END ${namespacePrefix}${functionName} function`);
    return loadedAndMergedDataAllFiles;
};

module.exports = {
    ['setupAllJsonConfigData']: (dataPathConfigurationName, contextName) => setupAllJsonConfigData(dataPathConfigurationName, contextName)
};