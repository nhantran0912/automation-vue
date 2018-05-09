<template>
  <div>
    <div class="jumbotron">
      <h3>Xin chào, Hứa Quý</h3>
      <p class="lead">This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to the top of your browser's viewport.</p>
    </div>
    <div class="row">
      <div class="w-100 text-center mb-3">
        <a class="btn btn-lg btn-primary" href="/auto-request" role="button">
          <svg fill="#9400D3" height="45" viewBox="0 0 24 24" width="45" style="vertical-align: middle;">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z"
            />
          </svg>
          Tăng Lượt Kết Bạn (Auto Request)
        </a>
      </div>
      <div class="w-100 text-center mb-3">
        <a class="btn btn-lg btn-primary" href="/" role="button">
          <svg fill="#9400D3" height="45" viewBox="0 0 24 24" width="45" style="vertical-align: middle;">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          Tăng Lượt Theo Dõi (Auto Follow)
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>