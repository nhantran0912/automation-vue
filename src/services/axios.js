import Vue from 'vue'
import Axios from 'axios'
const UNKNOWN_ERROR = 'Lỗi không xác định.'

var axios = Axios.create({
    baseURL: 'SERVER_URL'
})

var $api = {
    // Getter & setter
    setHeadersAccessToken(accessToken) {
        if (accessToken) {
            axios.defaults.headers.common['accessToken'] = accessToken
        }
    },

    // Get free like for id
    freeLike(id, next) {
        axios.post('/free-like', { 'id': id })
            .then((res) => {
                if (res.data) {
                    next()
                } else {
                    throw UNKNOWN_ERROR
                }
            })
            .catch((err) => {
                debugger
                console.log(err.response)
            })
    }

}

/**
 * Handle request & response
 */

axios.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
    return response
}, function (error) {
    return Promise.reject(error)
})

/**
 * Install
 */

Vue.use({
    install(Vue, options) {
        //   $api.setHeadersAccessToken($user.getAccessToken())
        Vue.prototype['$api'] = $api
    }
})

export default $api