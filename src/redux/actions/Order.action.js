import api from "api/Order.api";

export function getOrders(data) {
  return () => {
    return api
      .getOrders(data)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  };
}

export function changeOrderStatus(id, data) {
  return () => {
    return api
      .changeOrderStatus(id, data)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  };
}

export function searchOrder(data) {
  return () => {
    return api
      .searchOrder(data)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  };
}
