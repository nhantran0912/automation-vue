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
          title: data.serverName,
          input: 'text',
          html: `<span>Xác nhận hack like cho <b>ID: ${this.id}</b></span><br><img src="${data.captchaSrc}" id="imgCaptcha">`,
          showCancelButton: true,
          confirmButtonText: 'Xác Nhận',
          cancelButtonText: 'Hủy',
          showLoaderOnConfirm: true,
          inputPlaceholder: 'Nhập captcha vào đây',
          preConfirm: (captcha) => {
            if (!captcha) {
              swal.showValidationError('Vui lòng nhập mã captcha.')
            } else {
              return this.$api.submitFreeLike(data.cookie, this.id, data.credit, captcha)
                .then((res) => {
                  return true
                })
                .catch((err) => {
                  return this.$api.getFreeLike()
                    .then((res) => {
                      data = res.data
                      if (data.waitingTime) {
                        return parseInt(data.waitingTime)
                      } else {
                        document.getElementById('imgCaptcha').src = data.captchaSrc
                        swal.showValidationError(err.response.data.message)
                      }
                    })
                    .catch((err) => {
                      return false
                    })
                })
            }
          },
          allowOutsideClick: () => !swal.isLoading()
        }).then((result) => {
          if (typeof result.value === 'number') {
            this.$notify.error('Hệ Thống Đang Bận', `Vui lòng chờ <b>${result.value} giây</b> để tiếp tục.`)
          } else if (result.value === true) {
            swal({
              title: 'Chúc mừng bạn đã nhận LIKE thành công!'
            })
          } else if (result.value === false) {
            swal({
              type: 'error',
              title: 'Lỗi không mong muốn, hãy thử lại!'
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