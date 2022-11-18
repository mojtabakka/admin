import api from "api/Auth.api";

export function login(data) {
  return () => {
    return api
      .login(data)
      .then((response) => {
        console.log(response);
        const access_tokn = response.data.token;
        console.log('tkkkekjl;aksjdflkajsdf;lkjasdflkjas;dflj;alskfj;aflsdkj',access_tokn);
        localStorage.setItem("access_tokn", access_tokn);
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
