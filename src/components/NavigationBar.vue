<template>
  <div class="fade-in-delayed">
    <img :src="require('@/assets/logo.png')" id="logo" />
    <img :src="require('@/assets/menu icon.svg')" id="menu" />
  </div>
</template>

<style lang="scss">
$navbar-height: 61px; // height of the logo

.fade-in-delayed {
  animation-name: fade-in-opacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-delay: 1s;

  opacity: 0;
  width: 100%;

  position: fixed;

  z-index: 1;
}

@keyframes fade-in-opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.9;
  }
}

#logo {
  position: absolute;
  left: 0;
  top: 0;
}

#menu {
  position: absolute;
  right: 0;
  top: 0;
}
</style>