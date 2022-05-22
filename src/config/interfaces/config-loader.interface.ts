export interface ConfigLoaderDatabase {
  type: string;
  host: string;
  port: string;
  username: string;
  password: string;
  database: string;
}

export interface ConfigLoaderFlats {
  account_confirmation_available: boolean;
  recovery_password_available: boolean;
  register_me_available: boolean;
  user_have_account_available: boolean;
  upload_images_available: boolean;
}

export interface ConfigLoaderApis {
  api_token: string;
  auth_url_base: string;
  notifications_url_base: string;
  accounts_url_base: string;
  devices_url_base: string;
}
export interface ConfigLoaderUser {
  time_minutes_account_confirmation: number;
  time_minutes_recovery_password: number;
}

export interface ConfigLoaderAuth {
  jwt_secret: string;
  jwt_expires_in: string;
}
export interface ConfigLoaderModules {
  user: ConfigLoaderUser;
  auth: ConfigLoaderAuth;
}

export interface ConfigLoader {
  env: string;
  port: string;
  flats: ConfigLoaderFlats;
  db: ConfigLoaderDatabase;
  apis: ConfigLoaderApis;
  modules: ConfigLoaderModules;
}
