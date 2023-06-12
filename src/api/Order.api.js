import http from "services/http.service";
import {
  CHANGE_ORDER_STATUS,
  ORDER,
  GET_ORDER,
  SEARCH_ORDER,
} from "config/url.config";

const authApis = {
  getOrders(data) {
    return new Promise(function (resolve, reject) {
      http
        .get(ORDER, data)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },

  changeOrderStatus(id, data) {
    return new Promise(function (resolve, reject) {
      http
        .patch(CHANGE_ORDER_STATUS.replace(":id", id), data)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },

  getOrder(id) {
    return new Promise(function (resolve, reject) {
      http
        .patch(GET_ORDER.replace(":id", id))
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },

  searchOrder(data) {
    return new Promise(function (resolve, reject) {
      http
        .post(SEARCH_ORDER, data)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  },
};

export default authApis;
