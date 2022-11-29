import axios from "axios";
import { toast } from "react-toastify";
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
        if (checkExist.length === 0) {
          const user = localStorage.getItem("user");
          const token = `Bearer ${JSON.parse(user)?.token}`;
          config.headers.Authorization = token;
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
    axios.interceptors.response.use(
      (res) => {
        toast(res?.data.message, {
          autoClose: 2000,
          type: toast.TYPE.SUCCESS,
          position: toast.POSITION.BOTTOM_LEFT,
        });
        return res;
      },
      (error) => {
        toast(error.response.data.message, {
          autoClose: 2000,
          type: toast.TYPE.ERROR,
          position: toast.POSITION.BOTTOM_LEFT,
        });
        return error;
      }
    );
  }

  get(addres, data) {
    return axios.get(addres, { params: data });
  }

  post(address, data, config) {
    // config = { headers: { "Content-Type": "application/json" } };
    return axios.post(address, data, config);
  }

  delete(address, data, config) {
    config = config || { headers: { "content-type": "application/json" } };
    return axios.delete(address, { data });
  }

  patch(address, data, config) {
    // config = config || { headers: { "content-type": "application/json" } };
    return axios.patch(address, data, config);
  }

  put(address, data, config) {
    config = config || { headers: { "content-type": "application/json" } };
    return axios.put(address, data, config);
  }
}

export default new httpService();
