<template>
  <div>
    <div class="jumbotron">
      <h3>Xin chào, Hứa Quý</h3>
      <p class="lead">This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to the top of your browser's viewport.</p>
    </div>
    <div class="row" v-for="server in data">
      <div class="col-lg-12">
        <div class="card border-info mb-3">
          <h6 class="card-header text-light bg-primary">
            Máy Chủ 1
          </h6>
          <div class="card-body text-success">
            <div class="input-group mb-3">
              <input type="text" class="form-control" v-model="server.id" placeholder="Nhập ID cần tăng kết bạn (Ví dụ: xxxxxxx)" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <img :src="server.captchaSrc" class="rounded" alt="captcha">
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" v-model="server.captcha" placeholder="Nhập mã captcha bạn nhìn thấy ở trên" aria-label="Captcha" aria-describedby="basic-addon1">
            </div>
            <button type="button" class="btn btn-danger" @click="submit(server)">Gửi (tối đa {{server.credit}})</button>
            <div class="text-danger" v-if="clicked">
              <small class="form-text">Vui lòng nhập ID hoặc link bài viết.</small>
            </div>
            <p class="card-text small mt-3">* Lưu ý: Đăng nhập trên trình duyệt trước khi đăng nhập trên hệ thống.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        clicked: false,
        data: []
      }
    },
    created() {
      this.$api.getAutoRequest()
        .then((res) => {
          this.data = res.data
        })
        .catch((err) => {

        })
    },
    methods: {
      submit(server) {
        this.$api.submitAutoRequest({ 'cookie': server.cookie, 'id': server.id, 'limit': server.credit, 'captcha': server.captcha })
          .then((res) => {
            debugger
        
          })
          .catch((err) => {

          })
      }
    }
  }
</script>