import { ConfigLoader } from '../interfaces/config-loader.interface';

export const configLoader = (): ConfigLoader => ({
  env: process.env.APP_ENV,
  port: process.env.APP_PORT,
  flats: {
    account_confirmation_available:
      process.env.ACCOUNT_CONFIRMATION_AVAILABLE === 'true',
    recovery_password_available:
      process.env.RECOVERY_PASSWORD_AVAILABLE === 'true',
    register_me_available: process.env.REGISTER_ME_AVAILABLE === 'true',
    user_have_account_available:
      process.env.USER_HAVE_ACCOUNT_AVAILABLE === 'true',
    upload_images_available: process.env.UPLOAD_IMAGES_AVAILABLE === 'true',
  },
  db: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
  },
  apis: {
    accounts_url_base: process.env.ACCOUNTS_URL_BASE,
    api_token: process.env.API_TOKEN,
    auth_url_base: process.env.AUTH_URL_BASE,
    notifications_url_base: process.env.NOTIFICATIONS_URL_BASE,
    devices_url_base: process.env.DEVICES_URL_BASE,
  },
  modules: {
    auth: {
      jwt_expires_in: process.env.JWT_EXPIRES_IN,
      jwt_secret: process.env.JWT_SECRET,
    },
    user: {
      time_minutes_account_confirmation: Number(
        process.env.TIME_MINUTES_ACCOUNT_CONFIRMATION,
      ),
      time_minutes_recovery_password: Number(
        process.env.TIME_MINUTES_RECOVERY_PASSWORD,
      ),
    },
  },
});
