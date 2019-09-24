/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-23 16:00:47
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-23 20:28:26
 */
import { login } from '../../services';
let user = '';
if (window.localStorage.getItem('username')) {
    user = window.localStorage.getItem('username') + '';
}
export default {
    namespaced: true,
    state: {
        msg: '',
        username: user
    },
    mutations: {
        changemsg(state: any, payload: any) {
            state.msg = payload.msg;
            state.username = payload.username ? payload.username : '';
        }
    },
    actions: {
        async logintest(action: any, params: any) {
            const result = await login(params);
            console.log(result);
            if (result.data.sessionKey) {
                window.localStorage.setItem('sessionKey', result.data.sessionKey);
                window.localStorage.setItem('username', result.data.mobile);
                action.commit('changemsg', { msg: '登录成功', username: result.data.mobile });
            } else {
                action.commit('changemsg', { msg: '登录失败,账户名或者密码错误' })
            }
        }
    }
}
