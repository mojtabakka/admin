import axios from "axios";
import { BASE_URL, AXIOS_TIMEdOUT } from "config/variables.config";
import { DONT_NEEDED_URLS_FOR_AUTHENTICATION } from "config/url.config";
class httpService {
  constructor() {
    axios.defaults.baseURL = BASE_URL;
    axios.defaults.timeout = AXIOS_TIMEdOUT;
    axios.interceptors.request.use(
      (config) => {
        const checkExist = DONT_NEEDED_URLS_FOR_AUTHENTICATION().filter(
          (item) => {
            return item.url.trim() === config.url.trim();
          }
        );

        if (checkExist.length == 0)
          config.headers.Authorization = `Bearer ${JSON.parse(
            localStorage.getItem("access_tokn")
          )}`;
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );
  }

  get(addres, data) {
    return axios.get(addres, { params: data });
  }

  post(address, data, config) {
    // config = config || { headers: { "content-type": "application/json" } };
    return axios.post(address, data, config);
  }

  delete(address, config) {
    config = config || { headers: { "content-type": "application/json" } };
    return axios.delete(address, config);
  }

  patch(address, data, config) {
    config = config || { headers: { "content-type": "application/json" } };
    return axios.patch(address, data, config);
  }

  put(address, data, config) {
    config = config || { headers: { "content-type": "application/json" } };
    return axios.put(address, data, config);
  }
}

export default new httpService();
