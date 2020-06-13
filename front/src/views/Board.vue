<template>
  <div class="card">
    <div class="card-body">
      <div class="form-group">
        <label for="title">제목</label>
        <input type="text" class="form-control" id="title" v-model="title">
        <div v-if="validationErrors.title !== undefined" class="alert alert-danger">
          {{ validationErrors.title }}
        </div>
      </div>
      <div class="form-group">
        <label for="content">내용</label>
        <textarea class="form-control" id="content" rows="10" v-model="content" />
        <div v-if="validationErrors.content !== undefined" class="alert alert-danger">
          {{ validationErrors.content }}
        </div>
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
  import * as boardApi from '@/api/board';
  import { mapState } from 'vuex';

  export default {
    data() {
      return {
        title: '',
        content: ''
      };
    },
    computed: {
      ...mapState('error', {
        validationErrors: state => state.validations
      })
    },
    methods: {
      write() {
        boardApi.store(this.title, this.content).then(response => {
          console.log(response);
        }).catch(error => {
          console.error(error);
        })
      }
    }
  }
</script>
