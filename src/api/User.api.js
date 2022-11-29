import http from "services/http.service";
import { USER, UPLOAD_USER_IMG } from "config/url.config";

const authApis = {
  getUser() {
    return new Promise(function (resolve, reject) {
      http
        .get(USER)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },

  updateUser(data) {
    return new Promise(function (resolve, reject) {
      http
        .patch(USER, data)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },

  uploadUserImage(data) {
    console.log(data);
    return new Promise(function (resolve, reject) {
      http
        .post(UPLOAD_USER_IMG, data)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },
};

export default authApis;
