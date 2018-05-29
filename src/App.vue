<template>
  <div id="app">
    <top></top>
    <main role="main" class="container">
      <router-view></router-view>
    </main>
    <bottom></bottom>
  </div>
</template>

<script>
  import top from '@/components/layout/top.vue'
  import bottom from '@/components/layout/bottom.vue'

  export default {
    name: 'App',
    components: {
      'top': top,
      'bottom': bottom
    }
  }
</script>

<style>
  body {
    padding-top: 7.5rem;
  }

  .jumbotron {
    margin-bottom: 1rem;
    padding: 1rem 1rem;
  }

  .jumbotron h1 {
    font-size: 2rem;
    text-shadow: 0 0 3px #FF0000, 0 0 6px #FF00FF;
  }

  .card h2 {
    font-size: 1.5rem;
  }

  .card-body>h3 {
    font-size: 1.25rem;
  }

  .loader {
    display: inline-block;
    border-radius: 50%;
    border-top: 2px solid blue;
    border-right: 2px solid black;
    border-bottom: 2px solid white;
    border-left: 2px solid yellow;
    width: 15px;
    height: 15px;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>