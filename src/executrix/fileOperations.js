/**
 * @file fileOperations.js
 * @module fileOperations
 * @description Contains all of the functions required to do file operations,
 * on a physical/vertual hard drive and/or mounted volume.
 * Inclding loading files, saving files, reloading files, resaving files,
 * copying files, moving files, copying folders including copying folders recursively,
 * zipping files and saving zip-packages as part of a deployment/release process.
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/fs|fs}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Zhen Yu Zhou
 * @date 2026/02/19
 * @copyright Copyright © 2026-... by Zhen Yu Zhou. All rights reserved.
 */

let D = require('../structures/data');
let fs = require('fs');
let path = require('path');
let filesCollection = [];
const directoriesToSkip =['browser_components', 'node_modules', 'www', 'platforms', 'Release', 'Documentation', 'Recycle', 'Trash'];
let enableFilesListLimit = false;
let filesListLimit = -1;
let hitFileLimit = false;
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = `executrix.${baseFileName}.`;

/**
 * @function getJsonData
 * @description Loads specified file nd parses it into a JSON object(s).
 * @param {string} pathAndFilename The path and file name of the JSON file that
 * should be loaded and parsed into a JSON object(s).
 * @return {object} A JSON object(s) that was loaded and parsed from the specified file.
 * @author Zhen Yu Zhou
 * @date 2026/02/20 
 */
function getJsonData(pathAndFilename) {
    let functionName = getJsonData.name;
    // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    // console.log(`pathAndFilename is: ${pathAndFilename}`);
    pathAndFilename = path.resolve(pathAndFilename);
    let rawData, parsedData;
    try {
        rawData = fs.readFileSync(pathAndFilename, { encoding: 'UTF8'});
        parsedData = JSON.parse(rawData);
    } catch (e) {
        console.log('ERROR: ' + e.message);
    }
    // console.log(`parsedData is: ${JSON.stringify(parsedData)}`);
    // console.log(`END ${namespacePrefix}${functionName} function`);
    return parsedData;
};

/**
 * @function readDirectoryContents
 * @description This function acts as a wrapper for calling readDirectorySynchronusly since that function is recursive.
 * Also that function doesn't technically return anything, it works with a global variable that
 * needs to be reset after te work is done with it. So thse are the things that this wrapper function can do.
 * @param {string} directory The path that needs to be scanned.
 * @return {array<string>} An object containing an array of all the files in the folder and all sub-folders.
 * @author Zhen Yu Zhou
 * @date 2026/02/20
 */
function readDirectoryContents(directory) {
    let functionName = readDirectoryContents.name;
    // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    let filesFound = [];
    // Make sure to resolve the path on the local system,
    // just in case there are issues with the OS that the code is running on.
    directory = path.resolve(directory);
    readDirectorySynchronously(directory);
    filesFound = filesCollection; // Copy the data into a local variable first.
    // Make sure to clear it so we don't have a change of it corrupting any other file operations.
    filesCollection = undefined; 
    filesCollection = [];
    // console.log(`filesFound is: ${JSON.stringify(filesFound)}`);
    // console.log(`END ${namespacePrefix}${functionName} function`);
    return filesFound;
};


/**
 * @function readDirectorySynchronously
 * @description Recursively parses through all the sub-folders in a given path and saves all of the files
 * names and paths contained in each sub-folder into an array.
 * @param {string} directory The system path that should be scanned recursively for files.
 * @return {array<string>} An array of all the files contained in all levels of the secified path in all the folders and sub-folders.
 * @NOTE The functions doesn't actually return anything, all the file data is stored in an external data collection.
 * @author wn050
 * @reference https://stackoverflow.com/questions/41462606/get-all-files-recursively-in-drectores-nodejs
 * @date 2026/02/23
 */
function readDirectorySynchronously(directory) {
    let functionName = readDirectorySynchronously.name;
    // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    // console.log(`directory is: ${directory}`);
    if (hitFileLimit === false) {
        directory = path.resolve(directory);
        let currentDirectoryPath = directory;
        let currentDirectory = '';
        try {
            currentDirectory = fs.readdirSync(currentDirectoryPath, 'UTF8');
        } catch (e) {
            fs.mkdirSync(currentDirectoryPath);
            currentDirectory = fs.readdirSync(currentDirectoryPath, 'UTF8');
        }
        currentDirectory.forEach(file => {
            let filesShouldBeSkipped = directoriesToSkip.indexOf(file) > -1;
            let pathOfCurrentItem = directory + '/' + file;
            try {
                if (!filesShouldBeSkipped && fs.statSync(pathOfCurrentItem).isFile()) {
                    if (enableFilesListLimit === true && filesListLimit > 0) {
                        if (filesCollection.length <= filesListLimit) {
                            //console.log('Did not hit the file limit yet!');
                            filesCollection.push(pathOfCurrentItem);
                            // console.log('filesCollection is: ' + JSON.stringify(filesCollection));
                        } else {
                            // console.log('Hit the file limit!');
                            hitFileLimit = true;
                            return;
                        }
                    } else {
                        // console.log('Adding the file the old fashioned way!')
                        filesCollection.push(pathOfCurrentItem);
                    }
                } else if (!filesShouldBeSkipped) {
                    // NOTE: There is a difference in how paths are handled in Windows VS Mac/Linux,
                    // So for not I'm putting this code here like this to handle both situations.
                    // The ideal solution would be to detect which OS the code is being run on.
                    // Then handle each case appropriately.
                    let directoryPath = '';
                    directoryPath = path.resolve(directory + '//' + file);
                    // console.log(`directoryPath is: ${directoryPath}`);
                    readDirectoryContents(directoryPath);
                }
            } catch (e) { // Catch the error in the hops that we can continue scanning the file system.
                console.log(`ERRORs: Invalid access to: ${pathOfCurrentItem}`);
            }
        });
    }
    // console.log(`END ${namespacePrefix}${functionName} function`);
};

/**
 * @function cleanRootPath
 * @description Takes the application root path and cleans it to give a real root path,
 * or top-level folder path for the application.
 * @return {string} The real root path or top-level path for the application.
 * @NOTE This has been problematic because often many ofthe init functions are contained in lower level folder,
 * not at the top level. This gives much greater level of organization to the over all projet and
 * helps with scalability & reusability.
 * @author Zhen Yu Zhou
 * @date 2026/02/20
 */
function cleanRootPath() {
    let functionName = cleanRootPath.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    let rootPath;

    console.log(`rootPath is: ${rootPath}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return rootPath;
};

/**
 * @function appendMessageToFile
 * @description Opens a file and appends a message to the file, then closes file.
 * @param {string} file The fully qualified path and file name for the file that
 * should be opened, appended to, and closed.
 * @param {string} message The message that should be appended to the specified file.
 * @return {boolean} A True or Flase to indicate if the append happened successfully or not.
 * @author Zhen Yu Zhou
 * @date 2026/02/26
 */
function appendMessageToFile(file, message) {
    let functionName = appendMessageToFile.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`file is: ${file}`);
    console.log(`message is: ${message}`);
    let appendSuccess = false;
    if (file && message) {
        try {
            console.log('open the file sync');
            fd = fs.openSync(file, 'a');
            console.log('append to the file sync');
            fs.appendFileSync(fd, `${message}\r\n`, 'UTF8');
            console.log('DONE appending to the file');
        } catch (err) {
            return console.log(err);
        } finally {
            if (fd !== undefined) {
                fs.closeSync(fd);
            }
        }
    } // End-if (file && message)
    console.log(`appendSuccess is: ${appendSuccess}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
    return appendSuccess;
};

module.exports = {
    ['getJsonData']: (pathAndFilename) => getJsonData(pathAndFilename),
    ['readDirectoryContents']: (directory) => readDirectoryContents(directory),
    ['readDirectorySynchronously']: (directory) => readDirectorySynchronously(directory),
    ['appendMessageToFile']: (file, message) => appendMessageToFile(file, message)
};