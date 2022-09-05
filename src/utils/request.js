import axios from "axios";
import config from "@/config";
/**
 * @description axios初始化
 */
const instance = axios.create({
  baseURL: config.prefixURL,
  timeout: config.requestTimeout,
});

/**
 * 请求拦截
 */
instance.interceptors.request.use(
  (config) => {
    if (config.method === "get") {
      const params = config.params || {};
      params.t = Date.now();
      config.params = { ...params };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 响应拦截
 */

instance.interceptors.response.use(
  (response) => {
    let { status, data } = response;
    if (status === 200) {
      return data;
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
