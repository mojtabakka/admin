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

export function createCat(data) {
  return () => {
    return api
      .createCat(data)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  };
}

export function getCats(data) {
  return () => {
    return api
      .getCats(data)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  };
}

export function getCat(data) {
  return () => {
    return api
      .getCat(data)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  };
}

export function addProperty(data) {
  return () => {
    return api
      .addProperty(data)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  };
}
