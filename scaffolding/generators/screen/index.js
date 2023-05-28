/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Create a new screen',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Home',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or screen with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const componentTemplate = './screen/screen.js.hbs'; // eslint-disable-line no-var

    const actions = [
      {
        type: 'add',
        path: '../../src/screens/{{camelCase name}}/index.tsx',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'prettify',
      path: '/src/screens/',
    });

    return actions;
  },
};
