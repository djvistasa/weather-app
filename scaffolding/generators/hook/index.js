/**
 * Hook Generator
 */

module.exports = {
  description: 'Create a new hook',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message:
        'What should it be called? (needs to be prefixed with the word use)',
      default: 'useAuth',
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
    const componentTemplate = './hook/hook.js.hbs'; // eslint-disable-line no-var
    const importHookTemplate = './hook/importHookRoot.js.hbs'; // eslint-disable-line no-var
    const importHooksRootRegex = /\n\nexport {/gm;

    const actions = [
      {
        type: 'add',
        path: '../../src/hooks/{{camelCase name}}/index.ts',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'modify',
        pattern: importHooksRootRegex,
        path: '../../src/hooks/index.ts',
        templateFile: importHookTemplate,
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'prettify',
      path: '/src/api/',
    });

    return actions;
  },
};
