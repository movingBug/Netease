/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-23 17:03:26
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-23 17:08:02
 */
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8888',
    timeout: 1000,
});

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});
export default instance;