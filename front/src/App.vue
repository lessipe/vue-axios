<template>
  <div id="app" class="container mt-5">
    <app-header />
    <div class="pt-4">
      <router-view/>
    </div>
  </div>
</template>
<script>
  import AppHeader from '@/views/layouts/AppHeader.vue';

  export default {
    components: {
      AppHeader
    }
  }
</script>
