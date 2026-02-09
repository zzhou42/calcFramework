/**
 * @file testHarness.js
 * @module testHarness
 * @description This is the main init for the test harness application.
 * It contains just enough of the main program loop and/or basic argument parsing to effectively test the framework and its components.
 * @requires {@link https://www.npmjs.com/package/prompt-sync|prompt-sync}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Zhen Yu Zhou
 * @date 2026/02/08
 * @copyright Copyright © 2026-... by Zhen Yu Zhou. All rights reserved.
 */

import calcFramework from '../src/main.js';
const prompt = require('prompt-sync')();

let path = require('path');
global.appRoot = path.resolve(process.cwd());
let rootPath = '';
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = `testHarness.${baseFileName}.`;

/**
 * @function bootStrapApplication
 * @description Sets up all the testHarness application data and configuration settings.
 * @return {void}
 * @author Zhen Yu Zhou
 * @date 2026/02/08
 */
function bootStrapApplication() {
    let functionName = bootStrapApplication.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    rootPath = path.resolve(process.cwd());
    let appConfig = {
        "applicationName": "testHarness",
        "rootPath": rootPath,
        "appConfigReferencePath": "//test//resources//configuration//"
    };
    calcFramework.initFramework(appConfig);
    console.log(`END ${namespacePrefix}${functionName} function`);    
};

/**
 * @function application
 * @description This is the main program loop, the init for the testHarness application.
 * @return {void}
 * @author Zhen Yu Zhou
 * @date 2026/02/08
 */
function application() {
    let functionName = application.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    let argumentDrivenInterface = false;
    let commandInput;
    let commandResult;

    if (argumentDrivenInterface === false) {
        console.log('BEGIN main program loop');
        console.log('BEGIN command parser');
        
        while (programRunning === true) {
            commandInput = prompt('>');

            if (commandInput.toUpperCase() === 'EXIT') {
                console.log('END command parser');
                programRunning = false;
                console.log('END main program loop');
                console.log('EXITING TEST HARNESS APPLICATION');
                break;
            }
        }
    }
    console.log(`END ${namespacePrefix}${functionName} function`);    
}

// launch the test harness application
var programRunning = false;
bootStrapApplication();
programRunning = true;
application();