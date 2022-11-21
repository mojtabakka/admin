import http from "services/http.service";
import { CREATE__PRODUCT__POST } from "config/url.config";

const authApis = {
  createProduct(data) {
    return new Promise(function (resolve, reject) {
      http
        .post(CREATE__PRODUCT__POST, data)
        .then((response) => {
          console.log('hello');
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },
};

export default authApis;
