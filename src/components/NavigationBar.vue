<template>
  <div class="d-md-none">
    <div class="container-fluid m-0 p-0">
      <div class="row">
        <div class="position relative">
          <img
            class="position-absolute top-0 start-0 fade-in"
            :src="require('@/assets/logo.png')"
            alt="Logo"
          />
          <img
            class="position-absolute top-0 end-0 fade-in"
            :src="require('@/assets/menu icon.svg')"
            alt="Menu button"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="d-none d-md-block">DESKTOP VERSION</div>
</template>

<style lang="scss">
.fade-in {
  opacity: 0.9;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 1s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.9;
  }
}
</style>