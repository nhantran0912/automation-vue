<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
    <router-link to="/" class="navbar-brand">
      <img class="logo" src="../../assets/logo.jpg" alt="FBVN">
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Trang Chủ
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Chức Năng</a>
          <div class="dropdown-menu" aria-labelledby="dropdown01">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Thủ Thuật</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Liên Hệ</a>
        </li>
      </ul>
      <form class="form-inline mt-2 mt-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Nhập từ khóa..." aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
      </form>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'top',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style>
  .navbar,
  .navbar .form-control {
    background-color: #000 !important
  }

  .navbar-nav .nav-link {
    padding-left: 10px;
    text-transform: uppercase;
    font-weight: 800;
    background: #FFF;
    color: #222 !important;
    text-shadow: 1px 1px 0px #FFF, 2px 2px 0px #999, 3px 3px 0px #FFF;
    background-image: -webkit-linear-gradient(left top, transparent 0%, transparent 25%, rgba(0, 0, 0, .15) 25%, rgba(0, 0, 0, .15) 50%, transparent 50%, transparent 75%, rgba(0, 0, 0, .15) 75%);
    background-size: 4px 4px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .4) inset, 0 0 20px -5px rgba(0, 0, 0, .4), 0 0 0px 3px #FFF inset;
  }

  .navbar-nav .nav-link:hover {
    color: #F00 !important;
  }

  .navbar-nav .nav-item {
    margin-right: 8px;
  }

  .logo {
    height: 75px;
  }
</style>