import api from "api/Type.api";

export function addProductType(data) {
  return () => {
    return api
      .addProductType(data)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  };
}

export function addBrand(data) {
  return () => {
    return api
      .addBrand(data)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  };
}

export function getBrands(data) {
  return () => {
    return api
      .getBrands(data)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  };
}

export function getProductTypes(data) {
  return () => {
    return api
      .getProductTypes(data)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  };
}
