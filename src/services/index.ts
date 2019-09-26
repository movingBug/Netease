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

// 获取首页数据
export async function getData() {
    return await request.get('/')
}

// 传ID获取每一项数据
export async function TabData(params:any) {
    return await request.get('/goods/category',{
        params:{id:params}
    })
}

// /catalog/index
export async function catalog() {
    return await request.get('/catalog/index')
}

// goodsList  categoryId
export async function goodsList(params:any) {
    return await request.get('/goods/list',{
        params:{categoryId:params}
    })
}

// 导航列表详情页
export async function goodsItem(params:any) {
    return await request.get('/goods/detail',{
        params:{id:params}
    })
}

// 根据制造商ID获取制造商相关商品
// /brand/detail
export async function brand(params:any) {
    return await request.get('/brand/detail',{
        params:{id:params}
    })
}

// 制造商数据  /goods/list
export async function brandList(params:any) {
    return await request.get('/goods/list',{
        params:{brandId:params}
    })
}

// 根据专题Id获取专题详情
// /topic/detail
export async function topic(params:any) {
    return await request.get('/topic/detail',{
        params:{id:params}
    })
}



