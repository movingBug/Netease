/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-26 16:01:40
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-26 19:20:00
 */
import { getShopcarList, changeItemStatus } from '@/services/index';
export default {
    namespaced: true,
    state: {
        carList: []
    },
    mutations: {
        addCarList(state: any, payload: any) {
            state.carList = payload.list;
        }
    },
    actions: {
        async getCarList(action: any) {
            const result = await getShopcarList();
            action.commit('addCarList', { list: result.data.cartList })
        },
        async getCarStatus(action: any, payload: any) {
            const result = await changeItemStatus(payload);
            action.commit('addCarList', { list: result.data.cartList })
        }
    },

}