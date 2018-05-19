<template>
  <div class="jumbotron">
    <h4 for="freeLike">Tăng Like Miễn Phí</h4>
    <div class="input-group">
      <input type="text" v-model.trim="id" class="form-control" id="freeLike" placeholder="Nhập ID hoặc link bài viết">
      <div class="input-group-append">
        <button class="btn btn-danger" type="button" @click="submit" :disabled="loading">Nhận like</button>
      </div>
    </div>
    <div class="text-danger" v-if="clicked">
      <small class="form-text" v-show="requiredId">Vui lòng nhập ID hoặc link bài viết.</small>
    </div>
    <label for="freeLike" class="text-info mt-2">Vui lòng
      <b>ĐĂNG NHẬP</b> để sử dụng các chức năng như tăng like, tăng follow,... không giới hạn.
    </label>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        clicked: false,
        loading: false
      }
    },
    methods: {
      submit() {
        this.clicked = true
        if (!this.requiredId) {
          this.loading = true
          this.$api.freeLike(this.id, (err, data) => {
            this.loading = false
            if (err) {
              this.$notify.error(undefined, err.message, () => {
                this.message = ''
              })
            } else {
              this.$notify.success(undefined, data.message, () => {
                this.message = ''
              })
            }
          })
        }
      }
    },
    computed: {
      requiredId() {
        return !this.id
      }
    }
  }
</script>