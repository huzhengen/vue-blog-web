import Vue from 'vue'
import Vuex from 'vuex'
import request from '../helper/request'

Vue.use(Vuex)

const state = {
    user: null,
    isLogin: false,
}

const getters = {
    user: state => state.user,
    isLogin: state => state.isLogin
}

const mutations = {
    setUser(state, payload) {
        state.user = payload.user
    },

    setLogin(state, payload) {
        state.isLogin = payload.isLogin
    },
}

const actions = {
	login({ commit }, { username, password }) {
		return request('/users/login', 'post', {username, password}).then(res => {
			console.log(res)
			commit('setUser', { user: res.data })
			commit('setLogin', { isLogin: true })
		})
	},

	async register({ commit }, { username, password }) {
		// let res = await auth.register({ username, password })
		let res = await request('/users/register', 'post', {username, password})
		commit('setUser', { user: res.data })
		commit('setLogin', { isLogin: true })
		return res.data
	},

	async logout({ commit }) {
		console.log('loogout')
		// await auth.logout()
		await request('/users/logout', 'get')
		commit('setUser', { user: null })
		commit('setLogin', { isLogin: false })
	},

	async checkLogin({ commit, state }) {
		if (state.isLogin) return true
		// let res = await auth.getInfo()
		let res = await request('/users', 'get') // get接口/users，是获取session的user，存在返回true，不存在返回false
		console.log(res)
		commit('setLogin', { isLogin: res.isLogin }) // 如果返回的是false，store里的isLogin就设置为了false。
		if (!res.isLogin) return false
		commit('setUser', { user: res.data })
		return true
	},
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
})