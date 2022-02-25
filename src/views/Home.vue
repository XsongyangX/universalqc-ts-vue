<template>
  <div class="container-fluid p-0">
    <img class="background" :src="require('@/assets/montreal-hero.jpg')" alt="Montreal background" />
  </div>
</template>

<style lang="scss">
.background {
  height: 640px;
  max-width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: 50% 100%;
}
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class Home extends Vue { }
</script>
