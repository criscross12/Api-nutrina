export interface IPermission {
  name: string;
  key: string;
  group_key: string;
}

export interface ICreatePermission {
  permissions: Array<IPermission>;
  api_key: string;
}
