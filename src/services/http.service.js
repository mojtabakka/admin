import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL, AXIOS_TIMEdOUT } from "config/variables.config";
import { DONT_NEEDED_URLS_FOR_AUTHENTICATION } from "config/url.config";
import { isEmptyArray, isEmptyObject } from "common/utils/function.util";
import Cookies from "js-cookie";

class httpService {
  constructor() {
    axios.defaults.baseURL = BASE_URL + "api";
    axios.defaults.timeout = AXIOS_TIMEdOUT;
    axios.defaults.withCredentials = true;
    axios.interceptors.request.use(
      (config) => {
        const checkExist = DONT_NEEDED_URLS_FOR_AUTHENTICATION().filter(
          (item) => {
            return item.url.trim() === config.url.trim();
          }
        );
        if (checkExist.length === 0) {
          console.log(Cookies.get("token"));
          const user = localStorage.getItem("user");
          // const token = `Bearer ${JSON.parse(user)?.token}`;
          // config.headers.Authorization = token;
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
    axios.interceptors.response.use(
      (res) => {
        if (
          res.config.method === "post" ||
          res.config.method === "put" ||
          res.config.method === "patch"
        ) {
          console.log("hello");
          toast("عملیات با موفقیت انجام شد ", {
            autoClose: 2000,
            type: toast.TYPE.SUCCESS,
            position: toast.POSITION.BOTTOM_LEFT,
          });
        }
        return res;
      },
      (error) => {
        if (error?.response?.data?.statusCode === 403) {
          localStorage.removeItem("user");
          window.location.href = "/";
        }
        if (isEmptyObject(error)) {
          toast("خطای داخلی سرور", {
            autoClose: 2000,
            type: toast.TYPE.ERROR,
            position: toast.POSITION.BOTTOM_LEFT,
          });
        }
        toast(
          isEmptyArray(error.response.data.message)
            ? error.response.data.message
            : error.response.data.message[0],
          {
            autoClose: 2000,
            type: toast.TYPE.ERROR,
            position: toast.POSITION.BOTTOM_LEFT,
          }
        );
        return error;
      }
    );
  }

  get(addres, data) {
    return axios.get(addres, { params: data });
  }

  post(address, data, config) {
    config = config || { headers: { "Content-Type": "application/json" } };
    return axios.post(address, data, config);
  }

  delete(address, data, config) {
    config = config || { headers: { "Content-Type": "application/json" } };
    return axios.delete(address, { data });
  }

  patch(address, data, config) {
    config = config || { headers: { "Content-Type": "application/json" } };
    return axios.patch(address, data, config);
  }

  put(address, data, config) {
    config = config || { headers: { "Content-Type": "application/json" } };
    return axios.put(address, data, config);
  }
}

export default new httpService();
