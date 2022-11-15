import axios from "axios";
import { BASE_URL, AXIOS_TIMEdOUT } from "config/variables.config";

class httpService {
  constructor() {
    axios.defaults.baseURL = BASE_URL;
    axios.defaults.timeout = AXIOS_TIMEdOUT;
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
