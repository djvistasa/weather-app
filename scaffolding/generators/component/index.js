/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Create a new component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: (data) => {
    // Generate index.js and index.test.js
    const componentTemplate = './component/stateless.js.hbs';
    const styledComponentTemplate = './component/styledComponent.js.hbs';
    const interfaceTemplate = './component/interface.js.hbs';
    const enumTemplate = './component/enum.js.hbs';

    const actions = [
      {
        type: 'add',
        path: '../../src/components/{{camelCase name}}/index.tsx',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{camelCase name}}/{{camelCase name}}.test.tsx',
        templateFile: './component/test.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{camelCase name}}/styles.ts',
        templateFile: styledComponentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{camelCase name}}/types.ts',
        templateFile: interfaceTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{camelCase name}}/enums.ts',
        templateFile: enumTemplate,
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'prettify',
      path: '/src/components/',
    });

    return actions;
  },
};
