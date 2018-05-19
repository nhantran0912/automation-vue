<template>
  <div>
    <div class="jumbotron" v-show="data.length === 0">
      <p class="lead text-danger">Đang tải dữ liệu từ các máy chủ Auto Like...</p>
    </div>
    <div class="row" v-for="server in data">
      <div class="col-lg-12">
        <div class="card border-info mb-3">
          <h6 class="card-header text-light bg-primary">
            {{ server.name }}
            <span class="text-danger" v-show="server.waitingTime">(Chờ {{ server.waitingTime }} giây để tiếp tục)</span>
          </h6>
          <div class="card-body text-success" v-show="!server.waitingTime">
            <div class="input-group mb-3">
              <input type="text" class="form-control" v-model="server.id" placeholder="Nhập ID cần tăng like (Ví dụ: 2004260029839498)" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <img :src="server.captchaSrc" class="rounded" alt="captcha">
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" v-model="server.captcha" placeholder="Nhập mã captcha bạn nhìn thấy ở trên" aria-label="Captcha" aria-describedby="basic-addon1">
            </div>
            <button type="button" class="btn btn-danger" @click="submit(server)" :disabled="!server.id || !server.captcha || loading">Gửi (tối đa {{server.credit}})</button>
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
        data: [],
        loading: false
      }
    },
    created() {
      this.reloadData()
    },
    methods: {
      submit(server) {
        this.loading = true
        this.$api.submitAutoLike(server.cookie, server.id, server.credit, server.captcha)
          .then((res) => {
            this.loading = false
            this.$notify.success(undefined, res.data.message, () => {
              this.data = []
              this.reloadData()
            })
          })
          .catch((err) => {
            this.loading = false
            this.$notify.error(undefined, err.response.data.message, () => {
              this.data = []
              this.reloadData()
            })
          })
      },
      reloadData() {
        this.$api.getAutoLike()
          .then((res) => {
            this.data = res.data
          })
          .catch((err) => {
            // nothing
          })
      }
    }
  }
</script>