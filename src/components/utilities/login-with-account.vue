<template>
  <div class="card border-info mb-3">
    <h6 class="card-header text-light bg-primary">
      <svg with="24" height="24" viewBox="0 0 512 512" fill="#CCC" class="align-middle">
        <path d="M252.864,216.448l-63.979-64c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.16-4.16,10.923,0,15.083l45.781,45.803H32
          c-5.888,0-10.667,4.779-10.667,10.667S26.112,234.667,32,234.667h187.584l-45.781,45.781c-4.16,4.16-4.16,10.923,0,15.083
          c2.069,2.091,4.8,3.136,7.531,3.136c2.731,0,5.461-1.045,7.552-3.115l63.979-63.979c0.981-0.981,1.771-2.176,2.325-3.477
          c1.088-2.603,1.088-5.547,0-8.149C254.635,218.624,253.845,217.429,252.864,216.448z" />
        <path d="M249.408,274.475c-3.989-1.685-8.576-0.747-11.627,2.304l-33.835,33.856c-12.053,12.096-33.152,12.096-45.248,0
          c-10.197-10.176-12.203-26.048-4.907-38.613c1.899-3.307,1.92-7.36,0-10.667c-1.877-3.307-5.397-5.355-9.216-5.355h-5.909
          c-5.888,0-10.667,4.779-10.667,10.667v128C128,424.064,151.936,448,181.333,448h64c5.888,0,10.667-4.779,10.667-10.667V284.331
          C256,280.021,253.397,276.117,249.408,274.475z" />
        <path d="M444.608,0c-6.293,0-12.416,1.259-18.155,3.733L305.237,55.68c-16.939,7.253-27.904,23.872-27.904,42.325v367.936
          c0,25.387,20.672,46.059,46.059,46.059c6.293,0,12.416-1.259,18.155-3.733l121.216-51.947
          c16.939-7.253,27.904-23.872,27.904-42.325V46.059C490.667,20.672,469.995,0,444.608,0z M341.333,288
          c0,5.888-4.779,10.667-10.667,10.667S320,293.888,320,288v-42.667c0-5.888,4.779-10.667,10.667-10.667
          s10.667,4.779,10.667,10.667V288z" />
        <path d="M333.205,20.459c4.651-1.984,7.275-6.997,6.251-11.947C338.432,3.563,334.08,0,329.003,0H181.333
          C151.936,0,128,23.936,128,53.333v128c0,5.888,4.779,10.667,10.667,10.667h5.909c0.149,0,0.299-0.021,0.427,0
          c5.888,0,10.667-4.779,10.667-10.667c0-2.837-1.109-5.44-2.944-7.339c-5.995-12.224-3.669-26.965,5.995-36.629
          c12.053-12.096,33.152-12.096,45.248,0l33.835,33.835c3.072,3.072,7.659,3.989,11.627,2.304c3.968-1.621,6.571-5.525,6.571-9.835
          V98.005c0-26.987,16.021-51.307,40.853-61.952L333.205,20.459z" />
      </svg>
      Đăng nhập bằng Tài khoản và Mật khẩu
    </h6>
    <div class="card-body text-success">
      <div class="input-group mb-3">
        <input type="text" v-model="username" class="form-control" placeholder="Email hoặc số điện thoại" aria-label="Username" aria-describedby="basic-addon1">
      </div>
      <div class="input-group mb-3">
        <input type="text" v-model="password" class="form-control" placeholder="Mật khẩu" aria-label="Username" aria-describedby="basic-addon1">
      </div>
      <button type="button" @click="submit" :disabled="loading" class="btn btn-danger">Nhận mã đăng nhập</button>
      <div class="text-danger" v-if="clicked">
        <small class="form-text" v-show="requiredUsername">Vui lòng nhập email hoặc số điện thoại.</small>
        <small class="form-text" v-show="requiredPassword">Vui lòng nhập mật khẩu.</small>
      </div>
      <iframe v-if="accessUrl" :src="accessUrl" id="iframeAccessUrl" class="mt-3"></iframe>
      <div v-if="accessUrl" class="input-group mb-3 mt-1">
        <textarea class="form-control" v-model="jsonData" maxlength="2000" placeholder="Sao chép toàn bộ mã đăng nhập phía trên vào đây..."></textarea>
      </div>
      <button v-if="accessUrl" type="button" @click="submitJsonData" :disabled="loading || !jsonData" class="btn btn-danger">Đăng nhập</button>
      <p class="card-text small mt-3">* Lưu ý: Đăng nhập trên trình duyệt trước khi đăng nhập trên hệ thống.</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        clicked: false,
        loading: false,
        accessUrl: '',
        jsonData: ''
      }
    },
    methods: {
      submit() {
        this.clicked = true
        if (!this.requiredUsername && !this.requiredPassword) {
          this.loading = true
          this.$api.getAccessUrl(this.username, this.password)
            .then((res) => {
              this.loading = false
              this.accessUrl = res.data.accessUrl
            })
            .catch((err) => {
              this.loading = false
            })
        }
      },
      submitJsonData() {
        var data = JSON.parse(this.jsonData)
        if (data['access_token']) {
          this.$self.login(data['access_token'], this)
        } else {
          this.$notify.error(undefined, 'Tài khoản hoặc mật khẩu không chính xác.')
        }
      }
    },
    computed: {
      requiredUsername() {
        return !this.username
      },
      requiredPassword() {
        return !this.password
      }
    }
  }
</script>

<style>
  #iframeAccessUrl {
    width: 100%;
    border: 1px dotted green;
  }
</style>