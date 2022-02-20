<template>
  <div class="d-md-none">
    <div class="container-fluid m-0 p-0">
      <div class="row">
        <div class="position relative">
          <img
            class="nav-icon position-absolute top-0 start-0"
            :src="require('@/assets/logo mobile.svg')"
            alt="Logo"
          />
          <img
            class="nav-icon position-absolute top-0 end-0"
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
.nav-icon {
  width: 61px;
  height: 61px;
}

#logo {
  position: absolute;
  left: 0px;
  top: 0px;
}
</style>