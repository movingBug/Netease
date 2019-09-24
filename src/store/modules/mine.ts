/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-24 08:56:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-24 21:37:46
 */
let ID = '';
if (window.localStorage.getItem('productID')) {
    ID = window.localStorage.getItem('productID') + '';
}

import { getStarList, getProductDetail } from '../../services';
export default {
    namespaced: true,
    state: {
        productName: '',
        starlist: [],
        productId: ID,
        detailData: {}
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
        changeProductId(state: any, payload: any) {
            window.localStorage.setItem('productID', payload.id)
            state.productId = payload.id;
        },
        changeDetails(state: any, payload: any) {
            state.detailData = payload.obj;
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
            action.commit('changeDetails', { obj: result.data })
        }
    }
}