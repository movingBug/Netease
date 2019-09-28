/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-26 16:01:40
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-27 14:07:58
 */
import { getShopcarList, changeItemStatus, changeShopcarNum, deleteShopItem } from '@/services/index';
export default {
    namespaced: true,
    state: {
        carList: [],
        num: 0,
        totalMoney: 0,
        allSingle: 0
    },
    mutations: {
        addCarList(state: any, payload: any) {
            state.carList = payload.list;
        },
        changeNumWithTotalMoney(state: any, { list }: any) {
            state.num = 0;
            state.totalMoney = 0;
            list.forEach((item: any) => {
                if (item.checked) {
                    state.num += item.number;
                    state.totalMoney += item.number * item.market_price;
                    state.allSingle + 1
                }
            });
        },
    },
    actions: {
        async getCarList(action: any) {
            const result = await getShopcarList();
            action.commit('addCarList', { list: result.data.cartList })
        },
        async getCarStatus(action: any, payload: any) {
            const result = await changeItemStatus(payload);
            action.commit('addCarList', { list: result.data.cartList })
            action.commit('changeNumWithTotalMoney', { list: result.data.cartList });
        },
        async getNewNumber({ commit }: any, payload: any) {
            const result = await changeShopcarNum(payload);
            commit('addCarList', { list: result.data.cartList })
        },
        async deleteItem({ commit }: any, payload: any) {
            const result = await deleteShopItem(payload);
            commit('addCarList', { list: result.data.cartList })
        }
    },

}