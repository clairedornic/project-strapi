const path = require('path');

module.exports = ({env}) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'project-strapi'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'claire'),
      schema: env('DATABASE_SCHEMA', 'public'),
    },
    debug: false,
  },
});
