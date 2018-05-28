<template>
  <div class="card border-success" :class="css">
    <h6 class="card-header text-light bg-success">{{ title }}</h6>

    <div class="card-body" v-if="reloading">
      <p class="card-text" :class="{ 'text-danger' : reloadingError }">{{ reloadingMessage }}</p>
    </div>

    <div class="card-body" v-else-if="!auto.waitingTime">
      <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="auto.id" @keyup.enter="submit" placeholder="Nhập ID cần hack">
      </div>
      <div class="input-group mb-3">
        <img :src="auto.captchaSrc" class="rounded" alt="captcha">
      </div>
      <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="auto.captcha" @keyup.enter="submit" placeholder="Nhập mã captcha">
      </div>
      <button type="button" class="btn btn-primary" @click="submit" :disabled="!auto.id || !auto.captcha || loading">
        Gửi (tối đa {{auto.limit || '1 lần'}})
        <div class="loader" v-show="loading"></div>
      </button>
    </div>

    <div class="card-body" v-else>
      <p class="card-text text-danger">Chờ {{ auto.waitingTime }} giây để tiếp tục.</p>
    </div>
  </div>
</template>

<script>
  const TYPE = {
    'sub': {
      get: 'getAutoRequest',
      submit: 'submitAutoRequest'
    },
    'like': {
      get: 'getAutoLike',
      submit: 'submitAutoLike'
    }
  }

  export default {
    props: {
      name: String,
      css: String,
      title: String,
      type: String
    },
    data() {
      return {
        loading: false,
        reloading: false,
        reloadingMessage: 'Đang tải dữ liệu...',
        reloadingError: false,
        auto: null,
        self: TYPE[this.type]
      }
    },
    created() {
      this.loadData()
    },
    methods: {
      submit() {
        this.loading = true
        if (this.auto.id && this.auto.captcha && !loading) {
          this.$api[this.self.submit](this.name, this.auto)
            .then((res) => {
              this.loading = false
              this.loadData()
              this.$notify.success(undefined, 'Chúc mừng bạn đã thực hiện thành công.')
            })
            .catch((err) => {
              this.loading = false
              this.loadData()
              this.$notify.error(undefined, err.response.data.message)
            })
        }
      },
      loadData() {
        this.reloading = true
        this.$api[this.self.get](this.name)
          .then((res) => {
            this.reloading = false
            this.auto = res.data
          })
          .catch((err) => {
            this.reloadingMessage = err.response.data.message
            this.reloadingError = true
          })
      }
    }
  }
</script>