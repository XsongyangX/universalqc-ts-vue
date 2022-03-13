<template>
  <div class="panel-page">
    <div class="panel-title fade-in">UNIVERSAL</div>
    <div class="landing-panel">
      <p class="panel-text panel-margin">Everyone deserves a promising, open and free future.</p>
      <div class="panel-button panel-margin">
        <p class="panel-button-text">LEARN MORE</p>
      </div>
    </div>
  </div>
  <div class="panel-page" style="background: rgba(119, 51, 222, 0.9);">
    <div class="profile-photo">
      <div class="outer-circle">
        <img class="inner-circle" :src="require('@/assets/selfie 480x480.jpg')" />
      </div>
    </div>
    <div class="profile-description">
      <div class="panel-line"></div>
      <div class="profile-description-text">
        <p class="panel-text" style="font-weight: 300;">
          The Universal Party is a federalist, center-left party with a libertarian touch.
          <br />
          <br />I created this party out of disappointment in the Quebec establishment.
        </p>
        <p class="panel-text" style="text-align: right;">
          SONG YANG
          <br />Founder, Leader
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// background image of montreal
body {
  background-image: url("~@/assets/montreal-hero.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 100%;

  z-index: -1;
}

.panel-page {
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
}

// title
.panel-title {
  margin-top: 38vh; // top margin
  flex-basis: 32vh; // bottom margin

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
  flex-grow: 2;

  display: flex;
  flex-direction: column;

  animation: appear-up 1s 1s forwards;
  background: rgba(143, 96, 220, 0);
}

@keyframes appear-up {
  from {
    opacity: 0;
    visibility: visible;
    transform: translateY(-100%);
  }

  to {
    background: rgba(143, 96, 220, 0.85);
    opacity: 0.85;
    visibility: visible;
    transform: translateY(0%);
  }
}

.panel-margin {
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 5%;
}

.panel-text {
  text-align: left;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;

  animation: appear-up-text 1s 1s forwards;
  opacity: 0;
}

@keyframes appear-up-text {
  to {
    opacity: 1;
    color: white;
  }
}

.panel-button {
  display: flex;

  width: 142px;
  height: 39px;

  animation: appear-up-button 1s 1s forwards;
}

@keyframes appear-up-button {
  to {
    background: #ffffff;
  }
}

.panel-button-text {
  margin: auto;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  animation: appear-up-button-text 1s 1s forwards;
  opacity: 0;
}

@keyframes appear-up-button-text {
  to {
    color: #000000;
    opacity: 1;
  }
}

// Second page: profile picture

.profile-photo {
  margin-top: 10vh; // top margin
  margin-bottom: 2vh;
  // flex-basis: 5vh; // bottom margin
}

.outer-circle {
  background-color: #f1eaf9;
  height: 200px;
  width: 200px;
  border-radius: 50%;

  margin: auto; // center circle

  display: flex;
}

.inner-circle {
  height: 175px;
  width: 175px;
  border-radius: 50%;

  margin: auto;
}

.profile-description {
  display: flex;
  flex-direction: row;
}

.panel-line {
  height: 327px;
  border-left: 10px solid #f1eaf9;

  margin-left: 10%;
  // margin-top: 5%;
  margin-right: 10%;
}

.profile-description-text {
  padding-right: 40px;

  display: flex;
  flex-direction: column;
}
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class Home extends Vue { }
</script>
