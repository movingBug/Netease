/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-23 15:56:55
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-29 08:30:43
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
export async function TabData(params: any) {
    return await request.get('/goods/category', {
        params: { id: params }
    })
}

// catalog/index
export async function catalog() {
    return await request.get('/catalog/index')
}

// goodsList  categoryId
export async function goodsList(params: any) {
    return await request.get('/goods/list', {
        params: { categoryId: params }
    })
}

// 导航列表详情页
export async function goodsItem(params: any) {
    return await request.get('/goods/detail', {
        params: { id: params }
    })
}

// 根据制造商ID获取制造商相关商品
// /brand/detail
export async function brand(params: any) {
    return await request.get('/brand/detail', {
        params: { id: params }
    })
}

// 制造商数据  /goods/list
export async function brandList(params: any) {
    return await request.get('/goods/list', {
        params: { brandId: params }
    })
}

// 根据专题Id获取专题详情
// /topic/detail
export async function topic(params: any) {
    return await request.get('/topic/detail', {
        params: { id: params }
    })
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
// export async function getData() {
//     return await request.get('/')
// }
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
export function addShopcar(params: any) {
    return request.post('/cart/add', params)
}

// 获取购物车数据
export function getShopcarList() {
    return request.get('/cart/index');
}

// 更改购物车状态
export function changeItemStatus(params: any) {
    return request.post('/cart/checked', params);
}
// 更新购物车商品个数
export function changeShopcarNum(params: any) {
    return request.post('/cart/update', params)
}
// 删除购物车所选商品
export function deleteShopItem(params: any) {
    return request.post('/cart/delete', params);
}

// 
export function getclassify() {
    return request.post('/catalog/index')
}

///catalog/current
export async function getanother(params: any) {
    return await request.get('/catalog/current', {
        params: { id: params }
    })
}

export function Getclass(params: any) {
    console.log(params);
    return request.get('/goods/category', {
        params
    })
}

export function getGoods(params: any) {
    return request.get('/goods/list', {
        params
    })
}

export function getgoodsdetail(params: any) {
    return request.get('/goods/detail', {
        params: {
            id: params
        }
    })
}

export function gethotsearch() {
    return request.get('/search/index')
}

export function getfinddata(params: any) {
    return request.get('/search/helper', {
        params: {
            keyword: params
        }
    })
}


export async function getindex(params: any) {
    return await request.get('/goods/list', {
        params: {
            params
        }
    })
}

// comment/list?valueId=314&typeId=1&size=10&page=1
export function comment(params: any) {
    return request.get('comment/list', {
        params: {
            valueId: params.id,
            typeId: 1,
            page: params.page,
            size: params.size
        }
    })
}

// commentList
export function commentList(params: any) {
    return request.get('comment/list', {
        params: {
            valueId: params.id,
            typeId: 1,
            page: params.page,
            size: params.size
        }
    })
}

// /topic/related
export function related(params: any) {
    return request.get('/topic/related', {
        params: {
            id: params
        }
    })
}




