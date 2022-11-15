import api from "api/Auth.api";

export function login(data) {
  return () => {
    return api
      .login(data)
      .then((response) => response)
      .catch((error) => Promise.reject(error));
  };
}
