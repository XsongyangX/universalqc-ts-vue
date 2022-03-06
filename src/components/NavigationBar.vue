<template>
  <div class="appear-in">
    <div class="d-md-none">
      <div class="container-fluid m-0 p-0">
        <div class="row">
          <div class="position relative">
            <img
              class="position-absolute top-0 start-0"
              :src="require('@/assets/logo.png')"
              alt="Logo"
            />
            <img
              class="position-absolute top-0 end-0"
              :src="require('@/assets/menu icon.svg')"
              alt="Menu button"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="d-none d-md-block">DESKTOP VERSION</div>
  </div>
</template>

<style lang="scss">
.appear-in {
  opacity: 0;
  animation: appear-up 1s 1s forwards;
}

@keyframes appear-up {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 0.9;
  }
}
</style>