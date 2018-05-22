<template>
  <footer class="text-light bg-dark">
    <div class="container">
      <div class="row pt-3 pb-3">
        <div class="col-lg-9">
          <div class="fb-like" data-href="https://fbvn.org/" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
          <p>FBVN.ORG được thành lập vào ngày 19/5/2018. Với mục đích là tạo ra một hệ thống trao đổi like, sub lẫn nhau an toàn và miễn phí. Đừng quên nhấn
            vào Like và Share ở phía trên để ủng hộ website.</p>
          <p>
            Thông tin liên hệ: Số điện thoại 0902.615.325 hoặc Email tuyhpq@gmail.com
          </p>
        </div>
        <div class="col-lg-3 text-center">
          <div class="input-group input-group-sm mb-1">
            <textarea class="form-control" v-model="message" maxlength="1000" placeholder="Ý kiến, đóng góp của bạn dành cho website."></textarea>
          </div>
          <button type="button" @click="submit" class="btn btn-danger btn-sm w-100" :disabled="loading || !message">Gửi Cho Chúng Tôi</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'bottom',
    data() {
      return {
        message: '',
        loading: false
      }
    },
    methods: {
      submit() {
        this.loading = true
        this.$api.feedback(this.message)
          .then((res) => {
            this.loading = false
            this.$notify.success('Chân Thành Cảm Ơn', 'Chúng tôi đã ghi nhận ý kiến, đóng góp của bạn.', () => {
              this.message = ''
            })
          })
          .catch((err) => {
            this.loading = false
          })
      }
    }
  }
</script>