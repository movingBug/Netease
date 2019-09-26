/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-24 08:56:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-26 10:11:43
 */

import { getStarList, getProductDetail, getrelatedList, addcollect, addShopcar, getProductnum } from '../../services';
export default {
    namespaced: true,
    state: {
        productName: '',
        starlist: [],
        detailData: {},
        relatedList: [],
        cartData: {},
        shopcarIsshow: false,
        shopcarCount: 0
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
        },
        changeshopcarCount(state: any, payload: any) {
            state.shopcarCount = payload.count
        }
    },
    actions: {
        async getstarlist(action: any, params: any) {
            const result = await getStarList({ ...params });
            action.commit('changeSatrList', { list: result.data })
        },
        async getDetails(action: any, payload: any) {
            const result = await getProductDetail({ ...payload });
            let cartdata = {
                id: result.data.productList[0].goods_id,
                repertory: result.data.productList[0].goods_number,
                img_src: result.data.info.primary_pic_url,
                num: result.data.info.unit_price,
                price: result.data.productList[0].retail_price,
                unit: result.data.info.goods_unit,
                priceID: result.data.productList[0].id
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
        },
        async AddShopcar(action: any, params: any) {
            const result = await addShopcar(params);
        },
        async SelectShopcar(action: any) {
            const result = await getProductnum();
            action.commit('changeshopcarCount', { count: result.data.cartTotal.goodsCount })
        }
    }
}