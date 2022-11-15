import http from "services/http.service";
import { LOGIN__POST__LOGIN } from "config/utl.config";

const authApis = {
  login(data) {
    return new Promise(function (resolve, reject) {
      http
        .post(LOGIN__POST__LOGIN, data)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  },
};
export default authApis;
