<template>
  <div>
    <div class="jumbotron">
      <div class="row">
        <div class="col-md-3 text-center">
          <img :src="$user.imgUrl" class="rounded" alt="picture" width="150">
        </div>
        <div class="col-md-9 md-auto-center">
          <h3>Xin chào, {{ $user.name }}</h3>
          <p class="lead">Facebook ID: {{ $user.id }}</p>
          <button type="button" @click="logout" class="btn btn-dark btn-sm">Đăng xuất</button>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'user-info',
    methods: {
      logout() {
        this.$user.logout()
        this.$router.replace({ name: 'login' })
      }
    }
  }
</script>

<style>
  @media (max-width: 767px) {
    .md-auto-center {
      text-align: center;
      margin-top: 1rem;
    }
  }
</style>