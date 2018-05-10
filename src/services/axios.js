import Vue from 'vue'
import Axios from 'axios'
const QueryString = require('querystring')
const UNKNOWN_ERROR = 'Lỗi không xác định.'

var axios = Axios.create({
  baseURL: 'http://192.168.3.200:3000'
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
      .then((firstRes) => {
        var data = firstRes.data
        if (data.message.indexOf('Thành Công') !== -1 || data.message.indexOf('Chưa Ở chế Độ Công Khai') !== -1) {
          next(null, { 'message': data.message })
        } else {
          Axios.create().post(data.url, QueryString.stringify({ [data.name]: id }), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
            .then(() => {
              finalSubmit(data)
            })
            .catch(() => {
              finalSubmit(data)
            })
        }
      })
      .catch((err) => {
        next(err, { message: err.message })
      })

    function finalSubmit(firstData) {
      axios.post('/free-like', { 'id': id })
        .then((res) => {
          var data = res.data
          if (data.message.indexOf('Chưa Ở chế Độ Công Khai') !== -1 || data.message === firstData.message) {
            next(null, { message: data.message })
          } else {
            next(null, { message: 'Tăng like thành công.' })
          }
        })
        .catch((err) => {
          next(err, { message: err.message })
        })
    }
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