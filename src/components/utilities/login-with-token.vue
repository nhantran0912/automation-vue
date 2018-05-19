<template>
  <div class="card border-info mb-3">
    <h6 class="card-header text-light bg-primary">
      <svg with="20" height="20" viewBox="0 0 512 512" fill="#CCC" class="align-middle">
        <path d="M394.667,214.421v-75.755C394.667,62.208,332.459,0,256,0S117.333,62.208,117.333,138.667v75.755
          c-24.32,4.949-42.667,26.496-42.667,52.245v192C74.667,488.064,98.581,512,128,512h256c29.419,0,53.333-23.936,53.333-53.333v-192
          C437.333,240.917,418.987,219.371,394.667,214.421z M279.659,378.24l8.235,57.579c0.448,3.072-0.469,6.165-2.496,8.491
          c-2.027,2.325-4.971,3.691-8.064,3.691h-42.667c-3.093,0-6.037-1.344-8.064-3.669s-2.944-5.44-2.496-8.491l8.235-57.579
          c-17.835-8.917-29.675-27.328-29.675-47.595c0-29.397,23.915-53.333,53.333-53.333s53.333,23.936,53.333,53.333
          C309.333,350.933,297.493,369.344,279.659,378.24z M330.667,213.333H181.333v-74.667C181.333,97.493,214.827,64,256,64
          s74.667,33.493,74.667,74.667V213.333z" />
      </svg>
      Đăng nhập bằng Mã truy cập (Access token)
    </h6>
    <div class="card-body text-success">
      <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="accessToken" placeholder="Dán mã truy cập vào đây" aria-label="Username" aria-describedby="basic-addon1">
      </div>
      <button type="button" @click="submit" :disabled="loading" class="btn btn-danger">Đăng nhập</button>
      <div class="text-danger" v-if="clicked">
        <small class="form-text" v-show="requiredToken">Vui lòng nhập ID hoặc link bài viết.</small>
        <small class="form-text" v-show="tooshortToken">Mã truy cập quá ngắn.</small>
      </div>
      <p class="card-text small mt-3">
        Bạn có thể dùng
        <a href="https://goo.gl/auEKHz">Tiện ích của Chrome</a> để lấy mã truy cập.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        accessToken: '',
        clicked: false,
        loading: false
      }
    },
    created() {
      this.$self.login = this.login
    },
    methods: {
      submit() {
        this.clicked = true
        if (!this.requiredToken && !this.tooshortToken) {
          this.login(this.accessToken, this)
        }
      },
      login(accessToken, self) {
        self.loading = true
        self.$api.login(accessToken)
          .then((res) => {
            self.loading = false
            self.$user.login(res.data)
            self.$router.replace({ name: 'home' })
          })
          .catch((err) => {
            self.loading = false
          })
      }
    },
    computed: {
      requiredToken() {
        return !this.accessToken
      },
      tooshortToken() {
        return this.accessToken && this.accessToken.length <= 25
      }
    }
  }
</script>