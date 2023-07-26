import api from "api/Cagergory.api";

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

export function uploadCatImage(data) {
  return () => {
    return api
      .uploadCatImage(data)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  };
}
