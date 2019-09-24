/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-24 08:56:43
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-24 09:03:55
 */
export default {
    namespaced: true,
    state: {
        productName: ''
    },
    mutations: {
        changeProductName(state: any, payload: any) {
            state.productName = payload.name;
        }
    },
    actions: {

    }
}