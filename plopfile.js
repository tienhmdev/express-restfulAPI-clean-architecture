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
                    'plop-templates/controller.ts.hbs',
            },
            {
                type: 'add',
                path: 'src/services/{{dashCase name}}.service.ts',
                templateFile:
                    'plop-templates/service.ts.hbs',
            },
            {
                type: 'add',
                path: 'src/middleware/{{dashCase name}}.middleware.ts',
                templateFile:
                    'plop-templates/middleware.ts.hbs',
            },
            {
                type: 'add',
                path: 'src/routes/{{dashCase name}}.router.ts',
                templateFile:
                    'plop-templates/router.ts.hbs',
            },
            {
                type: 'add',
                path: 'src/validations/{{dashCase name}}.validator.ts',
                templateFile:
                    'plop-templates/validator.ts.hbs',
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
    });
    plop.setGenerator('Database Schema', {
        description: 'Create Database Schema',
        prompts: [
            {
                type: 'input',
                name: 'entity',
                message: 'What is entity name (ex. HotelRoom)?'
            },
            {
                type: 'input',
                name: 'table',
                message: 'What is table name (ex. hotel_rooms, without dtb_)?'
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/models/{{dashCase entity}}.entity.ts',
                templateFile:
                    'plop-templates/database.entity.ts.hbs',
            },
            {
                type: 'append',
                path: 'src/utils/constants/database.ts',
                pattern: `/* Define new table name */`,
                template: `  {{camelCase entity}}: "dtb_{{snakeCase table}}",`,
            },
            {
                type: 'append',
                path: 'src/data-source.ts',
                pattern: `/* Import new entity */`,
                template: `import { {{pascalCase entity}} } from "./models/{{dashCase entity}}.entity";`,
            },
            {
                type: 'append',
                path: 'src/data-source.ts',
                pattern: `/* Add new entity */`,
                template: `    {{pascalCase entity}},`,
            },
            {
                type: 'append',
                path: 'src/data-source.ts',
                pattern: `/* Define new repository */`,
                template: `  static repo{{pascalCase entity}} = AppDataSource.getRepository({{pascalCase entity}});`,
            }
        ],
    });
};