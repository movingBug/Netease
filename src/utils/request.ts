/*
 * @Author: zhanglifan 
 * @Date: 2019-09-17 07:56:47 
 * @Last Modified by: zhanglifan
 * @Last Modified time: 2019-09-28 16:42:44
 */

import axios from 'axios';
import { AxiosResponse } from 'axios/index';

let key = window.localStorage.getItem("sessionKey");

const instance = axios.create({
    baseURL: /cyz.jasonandjay.com/.test(window.location.host)?'https://easymarket.jasonandjay.com':'//169.254.212.227:8888',
    timeout: 1000,
    headers: {
        "x-nideshop-token": key
    }
})


// 请求拦截器
instance.interceptors.request.use((config: any) => {
    return config;
}, (error) => {
    return Promise.reject(error);
})

// 响应拦截器
instance.interceptors.response.use((Response: AxiosResponse<any>) => {
    return Response.data;
}, (error) => {
    return Promise.reject(error);
})

export default instance;
