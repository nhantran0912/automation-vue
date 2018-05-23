import Vue from 'vue'
import Axios from 'axios'
import $notify from '@/services/notification'
import $router from '@/router/index'
import $user from '@/services/user'

const Stringify = require('querystring').stringify

var axios = Axios.create({
  baseURL: SERVER_URL,
  withCredentials: true
})
var publicAxios = Axios.create()

var $api = {
  // public axios
  public: publicAxios,

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
          publicAxios.post(data.url, Stringify({ [data.name]: id }))
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
            next(null, { 'message': 'Chúc mừng bạn đã nhận like miễn phí thành công. Hãy đăng nhập để sử dụng thêm nhiều tính năng khác.' })
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

  // get access url to get access token
  getAccessUrl(username, password) {
    return axios.post('/access-url', { username, password })
  },

  // get auto request
  getAutoRequest(stt) {
    return axios.get('/auto-request/' + stt)
  },

  // submit auto request
  submitAutoRequest(stt, cookie, id, limit, captcha) {
    return axios.post('/auto-request/' + stt, { cookie, id, limit, captcha })
  },

  // get auto like
  getAutoLike(stt) {
    return axios.get('/auto-like/' + stt)
  },

  // submit auto like
  submitAutoLike(stt, cookie, id, limit, captcha) {
    return axios.post('/auto-like/' + stt, { cookie, id, limit, captcha })
  },

  // feedback
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
      $user.logout()
      $router.replace({ name: 'login' })
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