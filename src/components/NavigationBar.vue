<template>
  <div class="wide-nav" style="z-index: 5;">
    <ul class="fade-in-delayed">
      <li>
        <router-link to="/"><img :src="require('@/assets/logo.png')" id="logo" alt="The Logo of the Universal Party" />
        </router-link>
      </li>
      <li style="display: flex;">
        <router-link to="/platform" class="navbar-text">PLATFORM</router-link>
      </li>
      <li style="display: flex;">
        <router-link to="/candidates" class="navbar-text">CANDIDATES</router-link>
      </li>
      <li style="display: flex;">
        <router-link to="/donate-and-volunteer" class="navbar-text">DONATE</router-link>
      </li>
      <li style="display: flex;">
        <router-link to="/contact" class="navbar-text">CONTACT</router-link>
      </li>
      <li style="display: flex;">
        <router-link to="/about" class="navbar-text">ABOUT</router-link>
      </li>
      <li style="float:right">
        <p class="navbar-text">EN | FR</p>
      </li>
    </ul>
  </div>

  <div class="mobile-nav" style="z-index: 5;">
    <ul class="fade-in-delayed">
      <li>
        <router-link to="/"><img :src="require('@/assets/logo.png')" id="logo" alt="The Logo of the Universal Party" />
        </router-link>
      </li>
      <li style="float: right;">
        <img @click="openNav()" :src="require('@/assets/menu icon.svg')" id="menu" alt="Menu display button" />
      </li>
    </ul>
  </div>

  <!-- PULL OUT -->
  <div ref="pullout" class="sidenav">
    <div class="sidenav-header">
      <router-link @click="closeNav()" to="/"><img :src="require('@/assets/logo.png')"
          alt="The Logo of the Universal Party" />
      </router-link>
      <router-link @click="closeNav()" to="/" style="text-decoration: none;" class="sidenav-header-title">
        <p class="sidenav-header-title-text">UNIVERSAL PARTY</p>
      </router-link>
      <img @click="closeNav()" class="close-button" :src="require('@/assets/close_button.svg')" alt="Logo of the party">
    </div>
    <!-- <router-link class="sidenav-item" to="/news" @click="closeNav()">
      <p class="sidenav-item-text">NEWS</p>
    </router-link> -->
    <router-link class="sidenav-item" to="/platform" @click="closeNav()">
      <p class="sidenav-item-text">PLATFORM</p>
    </router-link>
    <router-link class="sidenav-item" to="/candidates" @click="closeNav()">
      <p class="sidenav-item-text">CANDIDATES</p>
    </router-link>
    <router-link class="sidenav-item" to="/donate-and-volunteer" @click="closeNav()">
      <p class="sidenav-item-text">DONATE & VOLUNTEER</p>
    </router-link>
    <router-link class="sidenav-item" to="/about" @click="closeNav()">
      <p class="sidenav-item-text">ABOUT</p>
    </router-link>
    <router-link class="sidenav-item" to="/contact" @click="closeNav()">
      <p class="sidenav-item-text">CONTACT US</p>
    </router-link>
    <div class="sidenav-item">
      <p class="sidenav-item-text" style="text-decoration: underline;">ENGLISH</p>
      <p class="sidenav-item-text" style="font-weight: 400;">|</p>
      <p class="sidenav-item-text" style="font-weight: 400;">FRANÇAIS</p>
    </div>
    <!-- ADD SOCIAL MEDIA LINKS -->
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

#logo {}

#menu {}

#menu:hover {
  cursor: pointer;
}

// https://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_horizontal_black_right
@media only screen and (min-width: 757px) {
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: white;
    height: 60px;
  }

  li {
    float: left;
  }

  .active {
    background-color: #04AA6D;
  }

  .navbar-text {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 49px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;

    margin: auto;
    text-decoration: none;
    padding-left: 10px;
    padding-right: 10px;
  }

  .mobile-nav {
    display: none;
  }
}

@media only screen and (max-width: 756px) {

  .wide-nav {
    display: none;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  li {
    float: left;
  }
}

.mobile-nav {
  position: fixed;
}

.wide-nav {
  position: fixed;
  z-index: 1;
}

// https://www.w3schools.com/howto/howto_js_sidenav.asp
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

  background-color: rgba(37, 37, 37, 0.86);

  overflow-x: hidden;
  /* Disable horizontal scroll */
  transition: 0.5s;
  /* 0.5 second transition effect to slide in the sidenav */

  display: flex;
  flex-direction: column;
}

/* Navigation header */
.sidenav-header {
  display: flex;
}

.sidenav-header-title {
  background: #7234CE;

  display: flex;

  flex: auto;
}

.sidenav-header-title-text {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #FFFFFF;

  margin: auto;
}

.close-button:hover {
  cursor: pointer;
}

/* The navigation menu links */
.sidenav-item {
  display: flex;

  text-decoration: none;

  padding: 15px;
}

.sidenav-item-text {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #FFFFFF;
  margin: auto;
}

/* When you mouse over the navigation links, change their color */
</style>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class SiteNavigation extends Vue {
  /* Set the width of the side navigation to 375px */
  openNav(): void {
    (this.$refs.pullout as HTMLElement).style.width = "375px";
  }

  /* Set the width of the side navigation to 0 */
  closeNav(): void {
    (this.$refs.pullout as HTMLElement).style.width = "0";
  }
}
</script>