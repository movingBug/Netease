/*
 * @Author: zhanglifan 
 * @Date: 2019-09-17 07:56:47 
 * @Last Modified by: zhanglifan
 * @Last Modified time: 2019-09-23 17:06:54
 */

import axios from 'axios';
import { AxiosResponse } from 'axios/index';

const instance = axios.create({
    baseURL:'http://127.0.0.1:8888',
    timeout: 1000,
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
