<template>
  <footer class="text-light bg-dark">
    <div class="container">
      <div class="row pt-3 pb-3">
        <div class="col-lg-9">
          <p>FBVN.ORG được thành lập vào năm 2018</p>
          <p>
            Thông tin liên hệ: Số điện thoại 0902 615 325 hoặc Email tuyhpq@gmail.com
          </p>
        </div>
        <div class="col-lg-3 text-center">
          <div class="input-group input-group-sm mb-1">
            <textarea class="form-control" placeholder="Ý kiến, đóng góp của bạn dành cho website."></textarea>
          </div>
          <button type="button" class="btn btn-danger btn-sm w-100">Gửi Cho Chúng Tôi</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'bottom',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>