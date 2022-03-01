<template>
  <div class="container-fluid p-0 m-0">
    <img
      class="img-responsive background"
      :src="require('@/assets/montreal-hero.jpg')"
      alt="Montreal background"
    />
    <div class="universal">UNIVERSAL</div>
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

.universal {
  position: absolute;
  width: 359px;
  height: 79px;
  left: 1px;
  top: 241px;

  font-family: "Oswald", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 71px;
  text-align: center;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.28);
}
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class Home extends Vue { }
</script>
