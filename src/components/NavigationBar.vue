<template>
  <div class="fade-in-delayed">
    <router-link to="/"><img :src="require('@/assets/logo.png')" id="logo" alt="The Logo of the Universal Party" />
    </router-link>
    <img @click="openNav()" :src="require('@/assets/menu icon.svg')" id="menu" alt="Menu display button" />
  </div>
  <div ref="pullout" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
</template>

<style lang="scss" scoped>
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

/* The side navigation menu */
.sidenav {
  height: 100%;
  /* 100% Full-height */
  width: 0;
  /* 0 width - change this with JavaScript */
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Stay on top */
  top: 0;
  /* Stay at the top */
  right: 0;
  background-color: #111;
  /* Black*/
  overflow-x: hidden;
  /* Disable horizontal scroll */
  padding-top: 60px;
  /* Place content 60px from the top */
  transition: 0.5s;
  /* 0.5 second transition effect to slide in the sidenav */
}

// https://www.w3schools.com/howto/howto_js_sidenav.asp

/* The navigation menu links */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left .5s;
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }

  .sidenav a {
    font-size: 18px;
  }
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class SiteNavigation extends Vue {
  /* Set the width of the side navigation to 250px */
  openNav(): void {
    (this.$refs.pullout as HTMLElement).style.width = "250px";
  }

  /* Set the width of the side navigation to 0 */
  closeNav(): void {
    (this.$refs.pullout as HTMLElement).style.width = "0";
  }
}
</script>