import Vue from 'vue'

const NAME = 'user'

var user = {
  logged: false,
  // user data:
  id: '',
  name: '',
  imgUrl: '',

  login(data) {
    if (data['id'] && data['name']) {
      this.logged = true
      this.setData(data)
    }
  },

  setData(data) {
    this.id = data['id']
    this.name = data['name']
    this.imgUrl = data['imgUrl']
  },

  logout() {
    this.logged = false
  },

  getData() {
    var list = document.cookie.split(';')
    var name = NAME + '='
    for (var i = 0; i < list.length; i++) {
      var str = list[i].trim()
      if (str.indexOf(name) === 0) {
        return JSON.parse(decodeURIComponent(str.substring(name.length, str.length)))
      }
    }
    return null
  }
}

var userData = user.getData()
if (userData) {
  user.login(userData)
}

Vue.use({
  install(Vue, options) {
    Vue.prototype['$user'] = user
    Vue.prototype['$self'] = {}
  }
})

export default user