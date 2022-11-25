import api from "api/Auth.api";

export function login(data) {
  return () => {
    return api
      .login(data)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        return response;
      })
      .catch((error) => Promise.reject(error));
  };
}

export function register(data) {
  return () => {
    return api
      .register(data)
      .then((response) => response)
      .catch((error) => Promise.reject(error));
  };
}

export function logout(data) {
  return () => {
    return api
      .logout(data)
      .then((response) => response)
      .catch((error) => Promise.reject(error));
  };
}
