<template>
  <div id="app">
    <top></top>
    <main role="main" class="container">
      <router-view/>
    </main>
    <bottom></bottom>
  </div>
</template>

<script>
  import 'bootstrap'
  import 'bootstrap/dist/css/bootstrap.min.css'

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
    padding-top: 6.5rem;
  }

  .jumbotron {
    margin-bottom: 1rem;
    padding: 1rem 1rem;
  }

  .jumbotron h4 {
    text-shadow: 0 0 3px #FF0000, 0 0 5px #FF00FF;
  }
</style>