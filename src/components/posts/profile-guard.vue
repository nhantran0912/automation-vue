<template>
  <div>
    <div class="jumbotron">
      <h1 for="freeProfileGuard">Bật Khiên Bảo Vệ Avatar Facebook</h1>
      <div class="input-group">
        <input type="text" v-model.trim="id" @keyup.enter="submit" class="form-control" id="freeProfileGuard" placeholder="Nhập access token">
        <div class="input-group-append">
          <button class="btn btn-danger" type="button" @click="submit" :disabled="loading">
            BẬT KHIÊN
            <div class="loader" v-show="loading"></div>
          </button>
        </div>
      </div>
      <div class="text-danger" v-if="clicked">
        <small class="form-text" v-show="requiredId">Vui lòng nhập access token (mã truy cập) của tài khoản cần bật khiên bảo vệ avatar.</small>
      </div>
      <label class="text-info mt-2">Hãy
        <b>ĐĂNG NHẬP</b> để sử dụng các chức năng như
        <strong>hack like</strong>,
        <strong>hack sub</strong>,...
        <strong>miễn phí</strong> và
        <strong>không giới hạn</strong>.
      </label>
    </div>
    <div class="card mb-3">
      <h2 class="card-header">
        <svg with="25" height="25" viewBox="0 0 512 512" class="align-middle">
          <path d="M437.02,74.98C388.667,26.629,324.38,0,256,0S123.333,26.629,74.98,74.98C26.629,123.333,0,187.62,0,256    s26.629,132.667,74.98,181.02C123.333,485.371,187.62,512,256,512s132.667-26.629,181.02-74.98    C485.371,388.667,512,324.38,512,256S485.371,123.333,437.02,74.98z M256,70c30.327,0,55,24.673,55,55c0,30.327-24.673,55-55,55    c-30.327,0-55-24.673-55-55C201,94.673,225.673,70,256,70z M326,420H186v-30h30V240h-30v-30h110v180h30V420z"
            fill="#FFDA44" />
        </svg>
        Giới Thiệu
      </h2>
      <div class="card-body text-success">
        <h3 class="card-title">1. Khiên bảo vệ avatar Facebook là gì?</h3>
        <p class="card-text">Khiên bảo vệ avatar Facebook (Profile Picture Guard) là một lớp phủ (như khiên bảo vệ) xung quanh ảnh đại diện của bạn.</p>
        <img src="../../assets/profile-guard.jpg" class="rounded mx-auto d-block" alt="Ảnh minh họa">
        <h3 class="card-title">2. Khiên bảo vệ có tác dụng gì?</h3>
        <p class="card-text">&star; Bảo vệ ảnh đại diện và người khác không thể sao chép ảnh đại diện của bạn.</p>
        <p class="card-text">&star; Tăng độ bảo mật cũng như độ tin cậy của Trang Cá Nhân.</p>
        <p class="card-text">&star; Chống RIP và giả mạo tài khoản.</p>
      </div>
    </div>
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
          this.$api.profileGuard(this.id)
            .then((res) => {
              this.loading = false
              this.$notify.success(undefined, 'Chúc mừng bạn đã bật khiên bảo vệ ảnh đại diện thành công.', () => {
                this.id = ''
                this.clicked = false
              })
            })
            .catch((err) => {
              this.loading = false
              switch (err.response.data.error) {
                case 'SUBMIT_GUARD_001':
                  this.$notify.error(undefined, 'Mã truy cập (access token) không chính xác.')
                  break;
                case 'SUBMIT_GUARD_002':
                  this.$notify.error(undefined, 'Mã truy cập (access token) không đúng loại.')
                  break;
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