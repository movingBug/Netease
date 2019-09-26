/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-23 15:56:55
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-26 11:27:24
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
export async function getData() {
    return await request.get('/')
}
// 获取相关商品
export function getrelatedList(params: any) {
    return request.get('/goods/related', {
        params
    });
}
// 查询购物车商品数量
export function getProductnum() {
    return request.get('/cart/goodscount')
}
// 添加到收藏栏
export function addcollect(params: any) {
    return request.post('/collect/addordelete', params)
}
// 添加购物车
export function addShopcar(params:any){
    return request.post('/cart/add',params)
}

