import api from "api/Product.api";

export function createProduct(data) {
  return () => {
    return api
      .createProduct(data)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  };
}


export function getProducts(data) {
  return () => {
    return api
      .getProducts(data)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  };
}