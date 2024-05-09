export const swaggerConfigs = {
    info: {
        title: 'express-restfulAPI-clean-architecture',
        description: 'Swagger Docs for express-restfulAPI-clean-architecture',
        version: '0.0.1',
    },
    security: {
        BearerAuthAdmin: {
            type: 'http',
            scheme: 'bearer',
            // bearerFormat: 'JWT',
        },
        BearerAuthUser: {
            type: 'http',
            scheme: 'bearer',
            // bearerFormat: 'JWT',
        },
    },
    baseDir: __dirname,
    filesPattern: ['./src/routes/*.ts', './src/types/swagger-schemas.ts'],
    swaggerUIPath: '/swagger',
    swaggerUiOptions: {
        explorer: true,
    },
    exposeSwaggerUI: true,
    exposeApiDocs: false,
};
