/**
 * @file main.js
 * @module main
 * @description Contains all customer facing functions that are used to interface it hthe rest of the application framework.
 * @requires module:warden
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Zhen Yu Zhou
 * @date 2026/02/08
 * @copyright Copyright © 2026-... by Zhen Yu Zhou. All rights reserved.
 */

let warden = require('./controllers/warden.js');
let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = `framework.${baseFileName}.`;

/**
 * @function initFramework
 * @description Initializes the framework systems.
 * @param {object} clientConfiguration a configuration data object that contains
 * all the data needed to bootstrap the
 * @return {void}
 * @author Zhen Yu Zhou
 * @date 2026/02/08
 */
function initFramework(clientConfiguration) {
    let functionName = initFramework.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`clientConfiguration is: ${JSON.stringify(clientConfiguration)}`);
    let appRootPath = warden.processRootPath(clientConfiguration);
    clientConfiguration['appRootPath'] = appRootPath;
    clientConfiguration['appConfigPath'] = appRootPath + clientConfiguration['appConfigReferencePath'];
    clientConfiguration['frameworkConfigPath'] = __dirname + '//resources//configuration//';
    warden.initFrameworkSchema(clientConfiguration);

    console.log(`END ${namespacePrefix}${functionName} function`);
};

module.exports = {
    ['initFramework']: (clientConfiguration) => initFramework(clientConfiguration)
};