module.exports = plop => {
    plop.setGenerator('API Endpoint Module', {
        description: 'Create API endpoint module',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your module name?'
            },
            {
                type: 'input',
                name: 'group',
                message: 'What is Swagger group name?'
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/controllers/{{dashCase name}}.controller.ts',
                templateFile:
                    'plop-templates/api-module/controller.ts.hbs',
            },
            {
                type: 'add',
                path: 'src/services/{{dashCase name}}.service.ts',
                templateFile:
                    'plop-templates/api-module/service.ts.hbs',
            },
            {
                type: 'add',
                path: 'src/middleware/{{dashCase name}}.middleware.ts',
                templateFile:
                    'plop-templates/api-module/middleware.ts.hbs',
            },
            {
                type: 'add',
                path: 'src/routes/{{dashCase name}}.router.ts',
                templateFile:
                    'plop-templates/api-module/router.ts.hbs',
            },
            {
                type: 'add',
                path: 'src/validations/{{dashCase name}}.validator.ts',
                templateFile:
                    'plop-templates/api-module/validator.ts.hbs',
            },
            {
                type: 'append',
                path: 'src/routes/index.ts',
                pattern: `/* Import part router */`,
                template: `import {{camelCase name}}Router from './{{dashCase name}}.router';`,
            },
            {
                type: 'append',
                path: 'src/routes/index.ts',
                pattern: `/* Use part router */`,
                template: `appRouter.use('/{{dashCase name}}', {{camelCase name}}Router);`,
            }
        ],
    })
};