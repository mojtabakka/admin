import http from "services/http.service";
import {
  ADD_PROPERTY,
  BRAND_POST,
  GET_BRANDS,
  GET_CAT,
  GET_CATS,
  POST_CAT,
  PROPERIIES_GET,
  TYPE,
} from "config/url.config";

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
        .get(GET_BRANDS, data)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },

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

  addProperty(data) {
    return new Promise(function (resolve, reject) {
      http
        .post(ADD_PROPERTY, data)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },

  getProperties(data) {
    return new Promise(function (resolve, reject) {
      http
        .get(PROPERIIES_GET, data)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },
};
export default authApis;
