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

export function getProduct(id) {
  console.log(id);
  return () => {
    return api
      .getProduct(id)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  };
}

export function deleteProduct(id) {
  return () => {
    return api
      .deleteProduct(id)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  };
}

export function editProduct(data, model) {
  console.log('mode',model);
  return () => {
    return api
      .editProduct(data, model)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  };
}

export function uploadProductImage(data) {
  return () => {
    return api
      .uploadProductImage(data)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  };
}
