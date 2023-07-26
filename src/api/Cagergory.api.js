import http from "services/http.service";
import { GET_CAT, GET_CATS, POST_CAT, UPLOAD_CAT_IMAGE_POST } from "config/url.config";

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

  uploadCatImage(data) {
    return new Promise(function (resolve, reject) {
      http
        .post(UPLOAD_CAT_IMAGE_POST, data, {
          headers: {
            "Content-Type": "multipart/form-data; boundary=something",
          },
        })
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },
};

export default authApis;
