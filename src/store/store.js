import Vue from 'vue'
import VueX from 'vuex'

import axios from 'axios'

Vue.use(VueX)

var localUsername = localStorage.getItem('username')
var localToken = localStorage.getItem('token')

const state = {
    token: localToken,
    username: localUsername
}

const mutations = {
    LOGIN(state, payload) {
        state.token = payload
    },
    LOGOUT(state) {
        state.token = ''
        state.username = ''
    },
    SETUSER(state, payload) {
        state.username = payload
    },
}

const getters = {
    getToken: state => state.token,
    getUser: state => state.username
}

const actions = {
    doLogin: async ({ commit, getters }, payload) => {
        await axios.post('https://adonisjs-vehicles.herokuapp.com/login', { email: payload.email, password: payload.password })
            .then((res) => {
                commit('LOGIN', res.data[0].token)
                localStorage.setItem('token', getters.getToken)
                Vue.http.headers.common.Authorization = `Bearer ${getters.getToken}`
                axios.defaults.headers.common['Authorization'] = `Bearer ${getters.getToken}`
            })
            .catch((err) => {
                throw new Error(err.response.status)
            })

        await axios.get('https://adonisjs-vehicles.herokuapp.com/load_session')
            .then((res) => {
                commit('SETUSER', res.data.username)
                localStorage.setItem('username', getters.getUser)
            })
            .catch((err) => {
                throw new Error(err.response.status)
            })
    },
    doSignup: async ({ commit, getters }, payload) => {
        if(payload.password != payload.passwordConfirm) {
            throw new Error('Senhas diferentes')
        }
        await axios.post('https://adonisjs-vehicles.herokuapp.com/register', { username: payload.username, email: payload.email, password: payload.password })
            .then((res) => {
                commit('LOGIN', res.data[0].token)
                localStorage.setItem('token', getters.getToken)
                Vue.http.headers.common.Authorization = `Bearer ${getters.getToken}`
            })
            .catch((err) => {
                console.log(err)
                throw new Error(err.response.status)
            })
    },
    doLogout: ({ commit }) => {
        console.log('chegou aqui')
        localStorage.removeItem('username')
        localStorage.removeItem('token')
        Vue.http.headers.common.Authorization = ``
        axios.defaults.headers.common['Authorization'] = ``
        commit('LOGIN', '')
        commit('SETUSER', '')
    }
}

export default new VueX.Store({
    state,
    mutations,
    getters,
    actions
})