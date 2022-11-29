import api from "api/User.api";

export function getUser() {
  return () => {
    return api
      .getUser()
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  };
}

export function updateUser(data) {
  return () => {
    return api
      .updateUser(data)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  };
}

export function uploadUserImage(data) {
  console.log("data", data);
  return () => {
    return api
      .uploadUserImage(data)
      .then((response) => {
        return response;
      })
      .catch((error) => Promise.reject(error));
  };
}
