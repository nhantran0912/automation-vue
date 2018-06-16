<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-black">
    <router-link to="/" class="navbar-brand pb-0 fz-1 mr-2">
      <img class="logo" src="../../assets/logo.jpg" alt="Hack Like Sub Facebook">
      <span class="nav-link custom-title d-inline-block" to="/">Trang Chủ</span>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown mr-2">
          <a class="nav-link dropdown-toggle custom-title" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Miễn Phí
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <router-link class="dropdown-item" to="/auto-request">Auto Kết Bạn</router-link>
            <router-link class="dropdown-item" to="/hack-like">Hack Like</router-link>
            <router-link class="dropdown-item" to="/hack-sub">Hack Sub</router-link>
          </div>
        </li>
        <li class="nav-item dropdown mr-2">
          <a class="nav-link dropdown-toggle custom-title" href="#" id="dropdownFunctionButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Chức Năng
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownFunctionButton">
            <router-link class="dropdown-item" to="/bat-khien-bao-ve-avatar-facebook/">Bật Khiên</router-link>
          </div>
        </li>
        <li class="nav-item mr-2">
          <router-link class="nav-link custom-title" to="#">Liên Hệ</router-link>
        </li>
      </ul>
      <ul class="navbar-nav mr-3">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="dropdownCredentialsButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16408b4a13c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16408b4a13c%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.4296875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              class="rounded" alt="..." width="48">
            <span>Tuý Công Tử</span>
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownCredentialsButton">
            <a class="dropdown-item" href="#">Thông Tin Cá Nhân</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Đăng Xuất</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'top'
  }
</script>

<style>
  .logo {
    height: 70px;
  }

  .bg-black {
    background-color: black !important
  }

  .navbar-nav .custom-title {
    padding-left: 10px;
  }

  .custom-title {
    text-transform: uppercase;
    font-weight: 800;
    background: #FFF;
    color: #222 !important;
    text-shadow: 1px 1px 0px #FFF, 2px 2px 0px #999, 3px 3px 0px #FFF;
    background-image: -webkit-linear-gradient(left top, transparent 0%, transparent 25%, rgba(0, 0, 0, .15) 25%, rgba(0, 0, 0, .15) 50%, transparent 50%, transparent 75%, rgba(0, 0, 0, .15) 75%);
    background-size: 4px 4px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .4) inset, 0 0 20px -5px rgba(0, 0, 0, .4), 0 0 0px 3px #FFF inset;
  }

  .custom-title:hover {
    color: #F00 !important;
  }

  .fz-1 {
    font-size: 1rem;
  }
</style>