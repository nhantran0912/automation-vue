<template>
  <div class="row">
    <div class="w-100 text-center mb-3">
      <router-link to="/auto-request" class="btn btn-lg btn-primary" role="button">
        <svg fill="#9400D3" height="45" viewBox="0 0 24 24" width="45" class="align-middle">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z"
          />
        </svg>
        Tăng Lượt Kết Bạn Và Theo Dõi (Auto Request & Hack Sub)
      </router-link>
    </div>
    <div class="w-100 text-center mb-3">
      <router-link to="/auto-like" class="btn btn-lg btn-primary" role="button">
        <svg fill="#9400D3" height="45" viewBox="0 0 24 24" width="45" class="align-middle">
          <path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"
          />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
        Tăng Lượt Thích (Auto Like)
      </router-link>
    </div>
    <div class="w-100 text-center mb-3">
      <router-link to="/auto-follow" class="btn btn-lg btn-primary disabled" role="button">
        <svg fill="#9400D3" height="45" viewBox="0 0 24 24" width="45" class="align-middle">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
          />
        </svg>
        Tăng Lượt Theo Dõi (Auto Follow)
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Welcome to FBVN'
      }
    }
  }
</script>