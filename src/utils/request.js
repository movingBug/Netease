/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 19:39:22
 * @LastEditTime: 2019-09-23 19:43:11
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://127.0.0.1:8888',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });
  instance.interceptors.request.use(function (config) {
    
    return config;
  }, function (error) {
   
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
   
    return response;
  }, function (error) {
    
    return Promise.reject(error);
  });
  export default instance;