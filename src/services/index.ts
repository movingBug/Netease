/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-23 15:56:55
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-24 21:02:58
 */
import request from '../utils/request';

// 登录
export function login(params: any) {
    return request.post('/auth/loginByMobile', params)
}

// 获取收藏数据
export function getStarList(params: any) {
    return request.get('/collect/list', {
        params
    })
}

// 获取详情数据
export function getProductDetail(params: any) {
    return request.get('/goods/detail', {
        params
    })
}