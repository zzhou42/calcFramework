/**
 * @file dataBroker.js
 * @module dataBroker
 * @description Contains all of the lower level dat processing functions,
 * and also acts as an interface for calling fileOperations.
 * @requires module:fileOperations
 * @requires module:configurator
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Zhen Yu Zhou
 * @date 2026/02/16
 * @copyright Copyright © 2026-... by Zhen Yu Zhou. All rights reserved.
 */

let fileOperations = require('../executrix/fileOperations');
let configurator = require('../executrix/configurator');
let path = require('path');
const data = require('../structures/data');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = `brokers.${baseFileName}.`;

/**
 * @function scanDataPath
 * @description Scans the specified path and returns a collection
 * of all the files contained recursively within that path and all sub-folders.
 * @param {string} dataPath The path that should be recursively scanned for files in all the folders.
 * @return {array<string>} An array of strings that each have the full path and file name
 * at all levels of the specified path including sub-folders.
 * @author Zhen Yu Zhou
 * @date 2026/02/16
 */
function scanDataPath(dataPath) {
    let functionName = scanDataPath.name;
    // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    // console.log(`dataPath is: ${dataPath}`);
    let rules = {};
    let filesFound = [];
    rules[0] = 'swapBackslashToForwardSlash';
    console.log(`execute business rules; ${JSON.stringify(rules)}`);
    dataPath = ruleBroker.processRules(dataPath, '', rules);
    console.log(`dataPath after business rules processing is: ${dataPath}`);
    filesFound = fileOperations.readDirectoryContents(dataPath);
    // console.log(`filesFound is: ${JSON.stringify(filesFound)}`);
    // console.log(`END ${namespacePrefix}${functionName} function`);
    return filesFound;
};

/**
 * @function loadAllJsonData
 * @description Loads all the contents of all files and folder and sub-folders at the specified path and builds a list,
 * then loads them accordingly in the D.contextName.
 * @param {array<string>} filesToLoad The data structure containing all of the files to load data from.
 * @param {string} contextName The context name that should be used when adding data to the D-data structure.
 * @return {object} A JSON object that contains all of the data that was loaded and parsed from all the input files.
 * @author Zhen Yu Zhou
 * @date 2026/02/19
 */
function loadAllJsonData(filesToLoad, contextName) {
    let functionName = loadAllJsonData.name;
    // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    // console.log(`filesToLoad is: ${JSON.stringify(filesToLoad)}`);
    // console.log(`contextName is: ${contextName}`);
    let foundSystemData = false;
    let systemConfigFileName = 'framework.system.json';
    let applicationConfigFileName = 'application.system.json';
    let multiMergedData = {};
    let parsedDataFile = {};

    // NOTE: Before we load all configturation data we need to FIRST load all the system conifguration settings.
    // There wll be a system configuration setting that will tell us if we need to lead the debug settings or not.
    for (let i = 0; i < filesToLoad.length; i++) {
        let fileToLoad = filesToLoad[i];
        if (fileToLoad.includes(systemConfigFileName) || fileToLoad.includes(applicationConfigFileName)) {
            let dataFile = preprocessJsonFile(fileToLoad);

            // NOTE: In this case we have just loaded either the framework configuration data or the application configuration data,
            // and nothing else. So we can just assign the data to the multiMergeData object directly without merging it with anything else.
            // We will need to merg all the other files,
            // but there will be a setting here we should examine to determine if the rest ofthe data should even be loaded or not.
            // We will hae a new setting that determins if all the extra debug setting should be loaded or not.
            // This way the applciation performace can be seriously optimized to greater leels of lean performance.
            // Adding all that extra debugging configuration setting can affect load times, and application performace to a much lesser degree.
            multiMergedData['system'] = {};
            multiMergedData['system'] = dataFile;
            foundSystemData = true;
        }
        if (foundSystemData === true)  {
            break;
        }
    } // end-for (let i = 0; i < filesToLoad.length; i++)

    // Now we need to determine if we should load the rest of the data
    if (multiMergedData['system']['system.enableDebugConfigurationSettings']) {
        if (multiMergedData['system']['system.enableDebugConfigurationSettings'] === true ||
        multiMergedData['system']['system.enableDebugConfigurationSettings'].toUpperCase() === 'TRUE') {
            for (let j = 0; j < filesToLoad.length; j++) {
                let fileToLoad = filesToLoad[j];
                if (!fileToLoad.includes(systemConfigFileName) && !fileToLoad.includes(applicationConfigFileName) &&
                fileToLoad.toUpperCase().includes('.JSON')) {
                    let dataFile = preprocessJsonFile(fileToLoad);

                    if (!multiMergedData['DebugSettings']) {
                        multiMergedData['DebugSettings'] = {};
                        multiMergedData['DebugSettings'] = dataFile;
                    } else {
                        Object.assign(multiMergedData['DebugSettings'], dataFile);
                    }
                } // end-if !fileToLoad.includes(systemConfigFileName) && !fileToLoad.includes(applicationConfigFileName) &&
            } // end-for (let j = 0; j < filesToLoad.length; j++)
        } // end-if (multiMergedData['system']['system.enableDebugConfigurationSettings'] === true ||
    } // end-if (multiMergedData['system']['system.enableDebugConfigurationSettings'])
    parsedDataFile = multiMergedData;
    // console.log(`parsedDataFile is: ${JSON.stringify(parsedDataFile)}`);
    // console.log(`END ${namespacePrefix}${functionName} function`);
    return parsedDataFile;
};

/**
 * @function preprocessJsonFile
 * @description Load all of the data from a single JSON data file.
 * @param {string} fileToLoad The fully qualified path to the file that should be loaded.
 * @return {object} The JSON data object that was loaded from the specified JSON data file.
 * @author Zhen Yu Zhou
 * @date 2026/02/19
 */
function preprocessJsonFile(fileToLoad) {
        let functionName = preprocessJsonFile.name;
        // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
        // console.log(`fileToLoad is: ${fileToLoad}`);
        let filePathRules = {};
        filePathRules[0] = 'swapDoubleForwardSlashToSingleForwardSlash';
        console.log(`execute business rules; ${JSON.stringify(filePathRules)}`);
        let finalFileToLead = ruleBroker.processRules(fileToLoad, '', filePathRules);
        let dataFile = fileOperations.getJsonData(finalFileToLead);
        // console.log(`dataFile is: ${JSON.stringify(dataFile)}`);
        // console.log(`END ${namespacePrefix}${functionName} function`);
        return dataFile;
}

module.exports = {
    ['scanDataPath']: (dataPath) => scanDataPath(dataPath),
    ['loadAllJsonData']: (filesToLoad, contextName) => loadAllJsonData(filesToLoad, contextName)
}