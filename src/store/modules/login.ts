/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-23 16:00:47
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-23 17:22:36
 */
import { login } from '../../services';
export default {
    namespaced: true,
    state: {
        msg: '',
    },
    mutations: {
        changemsg(state: any, payload: any) {
            state.msg = payload.msg;
        }
    },
    actions: {
        async logintest(action: any, params: any) {
            const result = await login(params);
            if (result.data.data.sessionKey) {
                window.localStorage.setItem('sessionKey', result.data.data.sessionKey);
                action.commit('changemsg', { msg: '登录成功' })
            } else {
                action.commit('changemsg', { msg: '登录失败,账户名或者密码错误' })
            }
            console.log(result);
        }
    }
}
