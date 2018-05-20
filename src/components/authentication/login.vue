<template>
  <div>
    <freeLike></freeLike>

    <div class="row">
      <div class="col-lg-6">
        <loginWithAccount></loginWithAccount>
      </div>

      <div class="col-lg-6">
        <loginWithToken></loginWithToken>
      </div>

    </div>

    <div class="jumbotron">
      <div class="row">
        <div class="col-sm-4 text-center">
          <svg fill="#9400D3" height="64" viewBox="0 0 24 24" width="64">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z"
            />
          </svg>
          <h5>Tự Động Kết Bạn</h5>
          <p class="">Tính năng tuyệt vời giúp bạn đạt mốc 5.000 bạn bè một cách nhanh chóng.</p>
        </div>
        <div class="col-sm-4 text-center">
          <svg fill="#9400D3" height="64" viewBox="0 0 24 24" width="64">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            />
          </svg>
          <h5>Tăng Lượt Theo Dõi</h5>
          <p class="">Tăng lượt theo dõi (follow) trên Trang Cá Nhân của bạn không giới hạn.</p>
        </div>
        <div class="col-sm-4 text-center">
          <svg fill="#9400D3" height="64" viewBox="0 0 24 24" width="64">
            <path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"
            />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
          <h5>Tăng Like</h5>
          <p class="">Nhận hàng ngàn lượt like, cảm xúc cho bài viết, hình ảnh của bạn chỉ bằng một cú click chuột.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 text-center">
          <svg fill="#9400D3" height="64" viewBox="0 0 24 24" width="64">
            <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
          <h5>Tự Động Bình Luận</h5>
          <p class="">Tự động bình luận (comment) trên bài viết, hình ảnh của bạn.</p>
        </div>
        <div class="col-sm-4 text-center">
          <svg fill="#9400D3" height="64" viewBox="0 0 24 24" width="64">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
          </svg>
          <h5>Tăng Like Fanpage</h5>
          <p class="">Tăng số lượt Thích trên Trang fanpage của bạn.</p>
        </div>
        <div class="col-sm-4 text-center">
          <svg fill="#9400D3" height="64" viewBox="0 0 24 24" width="64">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"
            />
          </svg>
          <h5>Xếp Hạng Fanpage</h5>
          <p class="">Tăng điểm xếp hạng của Trang fanpage trên cộng đồng Facebook.</p>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import freeLike from '../utilities/free-like.vue'
  import loginWithAccount from '../utilities/login-with-account.vue'
  import loginWithToken from '../utilities/login-with-token.vue'

  export default {
    components: {
      freeLike,
      loginWithAccount,
      loginWithToken
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>