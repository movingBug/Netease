/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-24 08:56:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-25 21:21:52
 */
let ID = '';
if (window.localStorage.getItem('productID')) {
    ID = window.localStorage.getItem('productID') + '';
}

import { getStarList, getProductDetail, getrelatedList, addcollect } from '../../services';
export default {
    namespaced: true,
    state: {
        productName: '',
        starlist: [],
        detailData: {},
        relatedList: [],
        cartData: {},
        shopcarIsshow: false
    },
    mutations: {
        changeProductName(state: any, payload: any) {
            state.productName = payload.name;
        },
        changeSatrList(state: any, payload: any) {
            payload.list.map((item: any) => {
                return item.isTouch = false;
            })
            state.starlist = payload.list;
        },
        touchEnd(state: any, payload: any) {
            const price = state.starlist[payload.index].retail_price;
            state.starlist[payload.index].isTouch = !state.starlist[payload.index].isTouch;
            state.starlist.map((item: any) => {
                if (item.retail_price != price) {
                    return item.isTouch = false;
                }
            })
        },
        changeDetails(state: any, payload: any) {
            state.detailData = payload.obj;
            state.cartData = payload.cartdata;
        },
        addRelated(state: any, payload: any) {
            state.relatedList = payload.list;
        },
        changeshopcarIsshow(state: any, payload: any) {
            state.shopcarIsshow = !state.shopcarIsshow;
        }
    },
    actions: {
        async getstarlist(action: any, params: any) {
            const result = await getStarList({ ...params });
            action.commit('changeSatrList', { list: result.data })
        },
        async getDetails(action: any, payload: any) {
            const result = await getProductDetail({ ...payload });
            console.log(result)
            let cartdata = {
                id: result.data.productList[0].goods_id,
                repertory: result.data.productList[0].goods_number,
                img_src: result.data.info.primary_pic_url,
                num: result.data.info.unit_price,
                price: result.data.productList[0].retail_price,
                unit: result.data.info.goods_unit
            }
            action.commit('changeDetails', { obj: result.data, cartdata })
        },
        async getRelated(action: any, params: any) {
            const result = await getrelatedList(params);
            action.commit('addRelated', { list: result.data.goodsList });
        },
        async AddCollect(action: any, params: any) {
            const result = await addcollect(params);
            console.log(result);
        }
    }
}