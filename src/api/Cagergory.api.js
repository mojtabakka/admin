import http from "services/http.service";
import { GET_CAT, GET_CATS, POST_CAT } from "config/url.config";

const authApis = {
  createCat(data) {
    return new Promise(function (resolve, reject) {
      http
        .post(POST_CAT, data)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },

  getCats(data) {
    return new Promise(function (resolve, reject) {
      http
        .get(GET_CATS, data)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },

  getCat(data) {
    return new Promise(function (resolve, reject) {
      http
        .get(GET_CAT, data)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },
};
export default authApis;
