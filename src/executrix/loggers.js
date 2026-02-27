/**
 * @file loggers.js
 * @module loggers
 * @description Contains all of the functions necessary for logging to the console,
 * and logging to a system-specified log file.
 * Additional logic is in place to allow the configuration file to define which
 * modules/files & functions should participate in logging operations.
 * @requires module:configurator
 * @requires module:data
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Zhen Yu Zhou
 * @date 2026/02/08
 * @copyright Copyright © 2026-... by Zhen Yu Zhou. All rights reserved.
 */

let configurator = require('../executrix/configurator');
let D = require('../structures/data');
let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = `executrix.${baseFileName}.`;

/**
 * @function consoleLog
 * @description Compares the class path to a series of configuration settings to determin
 * if we shuold log to the console or not.
 * Also can provisionally log to a log file as well since the console
 * is technically a transient data output.
 * @param {string} classPath THe class path for the caller of this function.file or class.method. 
 * @param {string} message The message or data contents that should be dumped to the output.
 * @return {void}
 * @author Zhen Yu Zhou
 * @date 2026/02/20
 */
function consoleLog(classPath, message) {
    // Make sure we don't log anything if we haven't loaded the configuration data.
    if (Object.keys(D).length !== 0) { 
        let consoleLogEnabled = configurator.getConfigurationSetting('consoleLogEnabled');
        if (consoleLogEnabled === true) {
            console.log(`BEGIN loggers.consolLog function`);
            console.log(`classPath is: ${classPath}`);
            console.log(`message is: ${message}`);
            let logFile = configurator.getConfigurationSetting('applicationCleanedRootPath');
            if (logFile !== undefined) {
                logFile = `${logFile}//logs`;
                console.log(`logFile before path.resolve is: ${logFile}`);
                logFile = path.resolve(logFile);
                console.log(`logFile after path.resolve is: ${logFile}`);
                logFile = logFile + '//' + configurator.getConfigurationSetting('logFilePathAndName');
                console.log(`logFile after adding the log file name is: ${logFile}`);
            } // end-if (logFile !== undefined)

            let debugFunctionSetting = false;
            let debugFileSetting = false;
            let debugSetting = false;
            let outputMessage = '';
            let configurationName = '';
            let configurationNamespace = '';

            console.log(`END loggers.consolLog function`);
        } // end-if (consoleLogEnabled === true)
    } //end-if (Object.keys(D).length !== 0)
};