/**
 * Api Generator
 */

module.exports = {
  description: 'Create a new api',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Auth',
      validate: value => {
        if (/.+/.test(value)) {
          return true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const componentTemplate = './api/api.js.hbs'; // eslint-disable-line no-var
    const interfaceTemplate = './component/interface.js.hbs';
    const importApiTemplate = './api/importApiRoot.js.hbs'; // eslint-disable-line no-var
    const importApiRootRegex = /\n\nexport {/gm;

    const actions = [
      {
        type: 'add',
        path: '../../src/api/{{camelCase name}}/index.ts',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/interfaces/api/{{camelCase name}}/index.ts',
        templateFile: interfaceTemplate,
        skipIfExists: true,
        abortOnFail: true,
      },
      {
        type: 'modify',
        pattern: importApiRootRegex,
        path: '../../src/api/index.ts',
        templateFile: importApiTemplate,
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'prettify',
      path: '/api/',
    });

    return actions;
  },
};
