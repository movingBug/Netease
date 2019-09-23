/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-23 15:56:55
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-23 17:08:31
 */
import request from '../utils/request';

// 登录
export function login(params: any) {
    return request.post('/auth/loginByMobile', params)
}