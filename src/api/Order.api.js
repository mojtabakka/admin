import http from "services/http.service";
import { CHANGE_ORDER_STATUS, ORDER } from "config/url.config";

const authApis = {
  getOrders(data) {
    return new Promise(function (resolve, reject) {
      http
        .get(ORDER)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },

  changeOrderStatus(id, data) {
    console.log(data);
    return new Promise(function (resolve, reject) {
      http
        .patch(CHANGE_ORDER_STATUS.replace(":id", id), data)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },
};

export default authApis;
