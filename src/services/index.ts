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
    console.log(params)
    return await request.get('/goods/category',{
        params:{id:params}
    })
}


