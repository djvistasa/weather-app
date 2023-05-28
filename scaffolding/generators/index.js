/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const componentGenerator = require('./component/index.js');
const containerGenerator = require('./screen/index.js');
const storeGenerator = require('./store/index.js');
const providerGenerator = require('./api/index.js');
const hookGenerator = require('./hook/index.js');

module.exports = plop => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('screen', containerGenerator);
  plop.setGenerator('store item', storeGenerator);
  plop.setGenerator('api', providerGenerator);
  plop.setGenerator('hook', hookGenerator);
  plop.addHelper('directory', comp => {
    try {
      fs.accessSync(path.join(__dirname, `../../src/screens/${comp}`), fs.F_OK);
      return `src/screens/${comp}`;
    } catch (e) {
      return `src/components/${comp}`;
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
  plop.setActionType('prettify', (answers, config) => {
    const folderPath = `${path.join(
      __dirname,
      '/../../src/',
      config.path,

      '**.ts',
    )}`;
    exec(`npm run prettify -- "${folderPath}"`);
    return folderPath;
  });
};
