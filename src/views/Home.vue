<template>
  <div class="container-fluid p-0 m-0">
    <img
      class="img-responsive background"
      :src="require('@/assets/montreal-hero.jpg')"
      alt="Montreal background"
    />
  </div>
</template>

<style lang="scss">
// in case you need the bootstrap breakpoint vars
// @import "~bootstrap/scss/_functions.scss";
// @import "~bootstrap/scss/_variables.scss";
// @import "~bootstrap/scss/mixins/_breakpoints.scss";

.background {
  max-width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: 50% 100%;
  // below this width, we crop the image and only see a part of it
  @media only screen and (max-width: 1080px) {
    height: 640px;
  }
}
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class Home extends Vue { }
</script>
