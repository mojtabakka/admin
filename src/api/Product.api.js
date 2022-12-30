import http from "services/http.service";
import { PRODUCT, UPLOAD_PRODUCT_IMAGE_POST ,GET_PRODUCT} from "config/url.config";

const authApis = {
  createProduct(data) {
    // const config = {
    //   headers: { "content-type": "multipart/form-data" },
    // };
    return new Promise(function (resolve, reject) {
      http
        .post(PRODUCT, data)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },

  getProducts() {
    return new Promise(function (resolve, reject) {
      http
        .get(PRODUCT)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },

  getProduct(id) {
    return new Promise(function (resolve, reject) {
      http

        .get(GET_PRODUCT.replace(":id", id))
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },

  deleteProduct(id) {
    return new Promise(function (resolve, reject) {
      http
        .delete(PRODUCT, id)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },

  editProduct(data) {
    return new Promise(function (resolve, reject) {
      http
        .patch(PRODUCT, data)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },

  uploadProductImage(data) {
    return new Promise(function (resolve, reject) {
      http
        .post(UPLOAD_PRODUCT_IMAGE_POST, data)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },
};

export default authApis;
