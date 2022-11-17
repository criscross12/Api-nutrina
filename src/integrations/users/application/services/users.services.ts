import { Injectable } from '@nestjs/common';
import { configLoader } from 'src/config/configs/env.configs';
const axios = require('axios');

@Injectable()
export class UsersService {
  async CreateUser(data: object, token: string) {
    const configEnv = configLoader();
    const url = configEnv.apis.auth_url_base + '/users';
    return await axios
      .post(url, data, {
        headers: {
          'api-token': configEnv.apis.api_token,
          Authorization: 'Bearer ' + token,
        },
      })
      .then((data) => data.data)
      .catch((err) => {
        console.log(err.response.data);
        return null;
      });
  }

  async GetUserByUuid(uuid, token: string) {
    const configEnv = configLoader();
    const url = configEnv.apis.auth_url_base + '/users/' + uuid;
    return await axios
      .get(url, {
        headers: {
          'api-token': configEnv.apis.api_token,
          Authorization: 'Bearer ' + token,
        },
      })
      .then((data) => data.data)
      .catch((err) => {
        console.log(err);
        return null;
      });
  }
}
