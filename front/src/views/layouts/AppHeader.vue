<template>
  <div class="text-center">
    <router-link :to="{name: 'login'}" class="btn" active-class="btn-primary">
      로그인
    </router-link>
    &nbsp;
    <router-link :to="{name: 'board.write'}" class="btn" active-class="btn-primary">
      게시글 작성
    </router-link>
  </div>
</template>
