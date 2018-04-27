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
    min-height: 75rem;
    padding-top: 4.5rem;
  }

  .jumbotron {
    margin-bottom: 1rem;
  }
</style>