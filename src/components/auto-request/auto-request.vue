<template>
  <div>
    <div class="jumbotron">
      <h3>Xin chào, Hứa Quý</h3>
      <p class="lead">This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to the top of your browser's viewport.</p>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card border-info mb-3">
          <h6 class="card-header text-light bg-primary">
            Máy Chủ 1
          </h6>
          <div class="card-body text-success">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Email hoặc số điện thoại" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Mật khẩu" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <button type="button" class="btn btn-danger">Đăng Nhập</button>
            <div class="text-danger" v-if="clicked">
              <small id="emailHelp" class="form-text">Vui lòng nhập ID hoặc link bài viết.</small>
            </div>
            <p class="card-text small mt-3">* Lưu ý: Đăng nhập trên trình duyệt trước khi đăng nhập trên hệ thống.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        clicked: false
      }
    }
  }
</script>