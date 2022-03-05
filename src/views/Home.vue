<template>
  <div class="universal">UNIVERSAL</div>
</template>

<style lang="scss">
// in case you need the bootstrap breakpoint vars
// @import "~bootstrap/scss/_functions.scss";
// @import "~bootstrap/scss/_variables.scss";
// @import "~bootstrap/scss/mixins/_breakpoints.scss";

body {
  background-image: url("~@/assets/montreal-hero.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 100%;

  z-index: -1;
}

.universal {
  position: absolute;
  top: 45%;
  width: 100%;
  height: 50%;

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
