<template>
  <div class="jumbotron">
    <h1 for="freeLike">Hack Like Miễn Phí</h1>
    <div class="input-group">
      <input type="text" v-model.trim="id" @keyup.enter="submit" class="form-control" id="freeLike" placeholder="Nhập ID hoặc link">
      <div class="input-group-append">
        <button class="btn btn-danger" type="button" @click="submit" :disabled="loading">
          NHẬN LIKE
          <div class="loader" v-show="loading"></div>
        </button>
      </div>
    </div>
    <div class="text-danger" v-if="clicked">
      <small class="form-text" v-show="requiredId">Vui lòng nhập ID hoặc link bài viết, hình ảnh, video cần hack like.</small>
    </div>
    <label class="text-info mt-2">Hãy
      <b>ĐĂNG NHẬP</b> để sử dụng các chức năng như
      <strong>hack like</strong>,
      <strong>hack sub</strong>,...
      <strong>miễn phí</strong> và
      <strong>không giới hạn</strong>.
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
          this.$api.getFreeLike()
            .then((res) => {
              this.loading = false
              var data = res.data
              if (data.waitingTime) {
                this.$notify.error('Hệ Thống Đang Bận', `Vui lòng chờ <b>${data.waitingTime} giây</b> để tiếp tục.`)
              } else {
                this.confirm(data)
              }
            })
            .catch((err) => {
              this.loading = false
              this.$notify.error(undefined, err.response.data.message)
            })
        }
      },
      confirm(data) {
        var swal = this.$swal
        swal({
          title: 'Máy chủ LIKE miễn phí (Việt Nam)',
          input: 'text',
          inputValue: this.id,
          html: `<span>Xác nhận hack like cho ID:</span>`,
          showCancelButton: true,
          confirmButtonText: 'Xác Nhận',
          cancelButtonText: 'Hủy',
          showLoaderOnConfirm: true,
          inputPlaceholder: 'Nhập ID vào đây',
          preConfirm: (id) => {
            if (!id) {
              swal.showValidationError('Vui lòng nhập ID cần hack like.')
            } else {
              return this.$api.submitFreeLike(id)
                .then((res) => {
                  return true
                })
                .catch((err) => {
                  return err.response.data.message
                })
            }
          },
          allowOutsideClick: () => !swal.isLoading()
        }).then((result) => {
          if (result.value === true) {
            swal({
              title: 'Chúc mừng bạn đã nhận LIKE thành công!'
            })
          } else if (typeof result.value === 'string' && result.value.length > 0) {
            swal({
              type: 'error',
              title: result.value
            })
          }
        })
      }
    },
    computed: {
      requiredId() {
        return !this.id
      }
    }
  }
</script>