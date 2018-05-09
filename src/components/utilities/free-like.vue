<template>
  <div class="jumbotron">
    <h4 for="freeLike">Tăng Like Miễn Phí</h4>
    <div class="input-group">
      <input type="text" class="form-control" id="freeLike" placeholder="Nhập ID hoặc link bài viết" v-model.trim="id">
      <div class="input-group-append">
        <button class="btn btn-danger" type="button" @click="submit">Nhận like</button>
      </div>
    </div>
    <div class="text-danger" v-if="clicked">
      <small id="emailHelp" class="form-text" v-show="requiredId">Vui lòng nhập ID hoặc link bài viết.</small>
    </div>
    <label for="freeLike" class="text-info mt-2">Vui lòng <b>ĐĂNG NHẬP</b> để sử dụng các chức năng như tăng like, tăng follow,... không giới hạn.</label>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        id: '',
        clicked: false
      }
    },
    methods: {
      submit() {
        this.clicked = true
        if (!this.requiredId) {
          this.$api.freeLike(this.id, (data) => {
            console.log(data)
          })
        }
      }
    },
    computed: {
      requiredId() {
        return !this.id
      }
    }
  }
</script>