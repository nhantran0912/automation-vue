<template>
  <div class="jumbotron">

    <h4 for="freeLike" class="">Tăng Like Miễn Phí</h4>
    <div class="input-group">
      <input type="text" class="form-control" id="freeLike" placeholder="Nhập ID hoặc link bài viết">
      <div class="input-group-append">
        <button class="btn btn-danger" type="button">Nhận like</button>
      </div>
    </div>
    <small id="emailHelp" class="form-text text-danger">We'll never share your email with anyone else.</small>

    <h4>Vui lòng Đăng nhập bằng một trong những cách sau:</h4>
    <h3>Cách 1: Nhập A</h3>
    <p class="lead">This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to
      the top of your browser's viewport.</p>
    <a class="btn btn-lg btn-primary" href="/" role="button">View navbar docs &raquo;</a>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>ư

<style>
  .jumbotron h4 {
    text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
  }
</style>