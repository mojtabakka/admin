import http from "services/http.service";
import { BRAND_POST, GET_BRANDS, TYPE } from "config/url.config";

const authApis = {
  addProductType(data) {
    return new Promise(function (resolve, reject) {
      http
        .post(TYPE, data)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },

  getProductTypes(data) {
    return new Promise(function (resolve, reject) {
      http
        .get(TYPE, data)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },

  addBrand(data) {
    return new Promise(function (resolve, reject) {
      http
        .post(BRAND_POST, data)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },

  getBrands(data) {
    return new Promise(function (resolve, reject) {
      http
        .post(GET_BRANDS, data)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },
};
export default authApis;
