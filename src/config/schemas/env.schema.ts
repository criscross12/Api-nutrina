import * as Joi from 'joi';

export const EnvSchema = Joi.object({
  APP_ENV: Joi.string()
    .valid('develop', 'stage', 'production')
    .default('develop'),
  APP_PORT: Joi.number().required().example(3000),

  DB_TYPE: Joi.string().valid('mongodb').required().default('mongodb'),
  DB_HOST: Joi.string().required(),
  DB_PASS: Joi.string(),
  DB_PORT: Joi.number().required().default(27017),
  DB_USER: Joi.string(),
  DB_DATABASE: Joi.string().required(),

  // API_TOKEN: Joi.string().min(124).required(),
  // AUTH_URL_BASE: Joi.string().uri().required(),
  // TIME_MINUTES_ACCOUNT_CONFIRMATION: Joi.number().required(),
  // TIME_MINUTES_RECOVERY_PASSWORD: Joi.number().required(),
  // JWT_SECRET: Joi.string().required(),
  // JWT_EXPIRES_IN: Joi.number().required(),

});
