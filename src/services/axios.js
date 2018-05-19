import Vue from 'vue'
import Axios from 'axios'
import $notify from '@/services/notification'

const Stringify = require('querystring').stringify

var axios = Axios.create({
  baseURL: 'http://localhost:3000/api/fbvn',
  withCredentials: true
})

var $api = {
  // get free like from id
  freeLike(id, next) {
    axios.post('/free-like', { 'id': id })
      .then((firstRes) => {
        var data = firstRes.data
        if (data.message.indexOf('thành công') !== -1) {
          next(null, { 'message': data.message })
        }
        else if (data.message.indexOf('Chưa Ở chế Độ Công Khai') !== -1) {
          next({ 'message': data.message }, null)
        }
        else {
          Axios.create().post(data.url, Stringify({ [data.name]: id }))
            .then(() => {
              finalSubmit(data)
            })
            .catch(() => {
              finalSubmit(data)
            })
        }
      })
      .catch((err) => {
        // nothing
      })

    function finalSubmit(firstData) {
      axios.post('/free-like', { 'id': id })
        .then((res) => {
          var data = res.data
          if (data.message.indexOf('Chưa Ở chế Độ Công Khai') !== -1 || data.message === firstData.message) {
            next({ 'message': data.message }, null)
          } else {
            next(null, { 'message': 'Tăng like thành công.' })
          }
        })
        .catch((err) => {
          // nothing
        })
    }
  },

  // login with access token
  login(accessToken) {
    return axios.post('/login', { accessToken })
  },

  getAutoRequest() {
    return axios.get('/auto-request')
  },

  submitAutoRequest(data) {
    return axios.post('/auto-request', data)
  },

  feedback(message) {
    return axios.post('/feedback', { message })
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
  if (error.response) {
    if (error.response.status === 401) {

    }
    else if (error.response.status === 500 || error.response.status === 404) {
      $notify.error('Lỗi Hệ Thống', 'Xin lỗi vì sự bất tiện này. Chúng tôi sẽ khắc phục nó trong thời gian sớm nhất.')
    }
    else if (error.response.status === 503) {

    }
    else if (error.response.status === 400 && error.response.data) {
      var data = error.response.data
      if (data.error === 'MISSING_DATA') {
        $notify.error('Dữ Liệu Bị Mất', 'Vui lòng liên hệ với chúng tôi để được giải quyết.')
      }
      else if (data.error === 'LOGIN_001' || data.error === 'LOGIN_002') {
        $notify.error(undefined, 'Mã truy cập không chính xác hoặc không đúng loại. <br>Hãy thử đăng nhập bằng tài khoản và mật khẩu.')
      }
    }
    else {
      $notify.error('Lỗi Không Xác Định', 'Vui lòng liên hệ với chúng tôi để được giải quyết.')
    }
  } else if (error.request) {
    $notify.error('Đã Xảy Ra Lỗi', 'Vui lòng thử lại sau.')
  } else {
    $notify.error('Lỗi Không Xác Định', 'Vui lòng thử lại sau.')
  }
  return Promise.reject(error)
})

/**
 * Install axios --> $api
 */
Vue.use({
  install(Vue, options) {
    Vue.prototype['$api'] = $api
  }
})

export default $api