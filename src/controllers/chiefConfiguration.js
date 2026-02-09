/**
 * @file chiefConfiguration.js
 * @module chiefConfiguration
 * @description Contains all of the functions to manage the configuration system,
 * such as adding, setup, parsing & processing.
 * @requires module:chiefData
 * @requires module:configurator
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Zhen Yu Zhou
 * @date 2026/02/08
 * @copyright Copyright © 2026-... by Zhen Yu Zhou. All rights reserved.
 */

let chiefData = require('./chiefData');
let configurator = require('../executrix/configurator');
let path = require('path');
let baseFileName = path.basename(module.filename, path.extname(module.filename));
let namespacePrefix = `controllers.${baseFileName}.`;

/**
 * @function setupConfiguration
 * @description Sets up all of the application and framework configuration data.
 * @param {string} appConfigPath The path of the configuration files for the application layer.
 * @param {string} frameworkConfigPath The path of the configuration files for the framework layer.
 * @return {void}
 * @author Zhen Yu Zhou
 * @date 2026/02/08
 */
function setupConfiguration(appConfigPath, frameworkConfigPath) {
    let functionName = setupConfiguration.name;
    console.log(`BEGIN ${namespacePrefix}${functionName} function`);
    console.log(`appConfigPath is: ${appConfigPath}`);
    console.log(`frameworkConfigPath is: ${frameworkConfigPath}`);
    configurator.setConfigurationSetting('appConfigPath', appConfigPath);
    configurator.setConfigurationSetting('frameworkConfigPath', frameworkConfigPath);
    let allAppConfigData = {};
    let allFrameworkConfigData = {};

    allFrameworkConfigData = chiefData.setupAllJsonConfigData('frameworkConfigPath', 'configuration');
    allAppConfigData = chiefData.setupAllJsonConfigData('appConfigPath', 'configuration');
    // TODO: parseLoadedConfigurationData
    // NOTE: We cannot really properly implet the parseLoadedConfigurationData until we have a basic business rules system.
    // TODO: mere App Config Data & Framework Config Data.

    console.log(`allAppConfigData is: ${JSON.stringify(allAppConfigData)}`);
    console.log(`allFrameworkConfigData is: ${JSON.stringify(allFrameworkConfigData)}`);
    console.log(`END ${namespacePrefix}${functionName} function`);
};