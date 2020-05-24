<template>
  <div class="card">
    <div class="card-body">
      <div class="form-group">
        <label for="title">제목</label>
        <input type="text" class="form-control" id="title" v-model="title">
      </div>
      <div class="form-group">
        <label for="content">내용</label>
        <textarea class="form-control" id="content" rows="10" v-model="content" />
      </div>
    </div>
    <div class="card-footer text-right">
      <button type="button" class="btn btn-dark" @click="write">
        게시글 작성
      </button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title: '',
        content: ''
      };
    },
    methods: {
      write() {

      }
    }
  }
</script>
