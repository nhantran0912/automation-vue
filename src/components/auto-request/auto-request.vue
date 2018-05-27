<template>
  <div>
    <div class="jumbotron" v-show="!autoFbsub || !autoVipfb || loading">
      <p class="lead text-danger">Đang xử lý dữ liệu...</p>
    </div>
    <div class="row" v-if="autoFbsub && !loading">
      <div class="col-lg-12">
        <div class="card border-info mb-3">
          <h6 class="card-header text-light bg-primary">
            {{ autoFbsub.serverName }}
            <span class="text-danger" v-show="autoFbsub.waitingTime">(Chờ {{ autoFbsub.waitingTime }} giây để tiếp tục)</span>
          </h6>
          <div class="card-body text-success" v-show="!autoFbsub.waitingTime">
            <div class="input-group mb-3">
              <input type="text" class="form-control" v-model="autoFbsub.id" placeholder="Nhập ID cần tăng kết bạn (Ví dụ: 100007665604062)">
            </div>
            <div class="input-group mb-3">
              <img :src="autoFbsub.captchaSrc" class="rounded" alt="captcha">
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" v-model="autoFbsub.captcha" placeholder="Nhập mã captcha bạn nhìn thấy ở trên">
            </div>
            <button type="button" class="btn btn-danger" @click="submit(0, autoFbsub)" :disabled="!autoFbsub.id || !autoFbsub.captcha || loading">Gửi (tối đa {{autoFbsub.limit || '1 lần'}})</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="autoVipfb && !loading">
      <div class="col-lg-12">
        <div class="card border-info mb-3">
          <h6 class="card-header text-light bg-primary">
            {{ autoVipfb.serverName }}
            <span class="text-danger" v-show="autoVipfb.waitingTime">(Chờ {{ autoVipfb.waitingTime }} giây để tiếp tục)</span>
          </h6>
          <div class="card-body text-success" v-show="!autoVipfb.waitingTime">
            <div class="input-group mb-3">
              <input type="text" class="form-control" v-model="autoVipfb.id" placeholder="Nhập ID cần tăng kết bạn (Ví dụ: 100007665604062)">
            </div>
            <div class="input-group mb-3">
              <img :src="autoVipfb.captchaSrc" class="rounded" alt="captcha">
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" v-model="autoVipfb.captcha" placeholder="Nhập mã captcha bạn nhìn thấy ở trên">
            </div>
            <button type="button" class="btn btn-danger" @click="submit(1, autoVipfb)" :disabled="!autoVipfb.id || !autoVipfb.captcha || loading">Gửi (tối đa {{autoVipfb.limit || '1 lần'}})</button>
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
        loading: false,
        autoFbsub: null,
        autoVipfb: null,
      }
    },
    created() {
      this.reloadData()
    },
    methods: {
      submit(stt, auto) {
        this.loading = true
        auto.stt = stt
        this.$api.submitAutoRequest(auto)
          .then((res) => {
            this.loading = false
            this.$notify.success(undefined, 'Chúc mừng bạn đã thực hiện thành công!', () => {
              this.loading = true
              this.$forceUpdate()
              this.reloadData()
            })
          })
          .catch((err) => {
            this.loading = false
            this.$notify.error(undefined, err.response.data.message, () => {
              this.loading = true
              this.$forceUpdate()
              this.reloadData()
            })
          })
      },
      reloadData() {
        this.$api.getAutoRequest(1)
          .then((res) => {
            this.autoFbsub = res.data
            this.loading = false
            this.$forceUpdate()
          })
          .catch((err) => {
            this.loading = false
            debugger
          })
        this.$api.getAutoRequest(2)
          .then((res) => {
            this.autoVipfb = res.data
            this.loading = false
            this.$forceUpdate()
          })
          .catch((err) => {
            this.loading = false
            debugger
          })
      }
    }
  }
</script>