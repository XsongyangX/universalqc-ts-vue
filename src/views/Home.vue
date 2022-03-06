<template>
  <div class="universal fade-in">UNIVERSAL</div>
  <div class="landing-panel move-in-from-below"></div>
</template>

<style lang="scss">
// in case you need the bootstrap breakpoint vars
// @import "~bootstrap/scss/_functions.scss";
// @import "~bootstrap/scss/_variables.scss";
// @import "~bootstrap/scss/mixins/_breakpoints.scss";

// background image of montreal
body {
  background-image: url("~@/assets/montreal-hero.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 100%;

  z-index: -1;
}

// title
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

.fade-in {
  animation-name: fade-in-opacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes fade-in-opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.9;
  }
}

.landing-panel {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 70%;

  background: rgba(143, 96, 220, 0.85);
}

.move-in-from-below {
  animation: appear-up 1s 1s forwards;
}

@keyframes appear-up {
  0% {
    top: 100%;
    opacity: 0;
  }

  100% {
    top: 70%;
    opacity: 0.85;
  }
}
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class Home extends Vue { }
</script>
