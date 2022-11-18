import http from "services/http.service";
import {
  LOGIN__POST__LOGIN,
  REGISTER__POST__REGISTER,
} from "config/url.config";

const authApis = {
  login(data) {
    return new Promise(function (resolve, reject) {
      http
        .post(LOGIN__POST__LOGIN, data)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },

  register(data) {
    return new Promise(function (resolve, reject) {
      http
        .post(REGISTER__POST__REGISTER, data)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  },
};
export default authApis;
