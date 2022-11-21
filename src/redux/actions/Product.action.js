import api from "api/Product.api";

export function createProduct(data) {
  return () => {
    return api
      .createProduct(data)
      .then((response) => {
        const access_tokn = response.data.token;
        localStorage.setItem("access_tokn", access_tokn);
        return response;
      })
      .catch((error) => Promise.reject(error));
  };
}
