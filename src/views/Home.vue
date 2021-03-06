<template>
  <div class="home-page">
    <div class="panel-page">
      <h1 class="panel-title fade-in">Universal.</h1>
      <div class="landing-panel">
        <h2 class="panel-text panel-margin" style="animation: appear-up-text 1s 1s forwards;">Everyone deserves a
          promising, open and free future.</h2>
        <a class="panel-button panel-margin" type="button" @click="scrollMeTo('leader-message')">
          Learn more
        </a>
      </div>
    </div>
    <div ref="leader-message" id="leader-message" class="panel-page" style="background: rgba(119, 51, 222, 0.9);">
      <div class="profile-photo">
        <div class="outer-circle">
          <img class="inner-circle" alt="Song Yang, Universal Party leader"
            :src="require('@/assets/selfie 480x480.jpg')" />
        </div>
      </div>
      <div class="profile-description">
        <div class="profile-description-text">
          <p class="panel-text" style="font-weight: 300; line-height: 28px;">
            The Universal Party is a federalist, center-left party with a libertarian touch.
            <br />
            <br />I created this party out of disappointment in the Quebec establishment.
          </p>
          <p class="panel-text" style="text-align: right; font-size: 1.3rem; font-weight: 600;">
            Song Yang
            <br />Founder, Leader
          </p>
        </div>
      </div>
    </div>
    <div class="panel-page ubi">
      <div class="proposal-panel">
        <h2 class="principle-title">Universal Basic Income</h2>
        <p class="call-to-action-text">$1200 per month for every adult, no strings attached. Your money, your choice.
        </p>
        <router-link to="/platform#UBI" class="proposal-button">
          <p class="proposal-button-text">Learn more</p>
        </router-link>
      </div>
    </div>
    <div class="panel-page language">
      <div class="proposal-panel">
        <h2 class="principle-title">Language Freedom</h2>
        <p class="call-to-action-text">A corollary of freedom of speech. Choose your own language(s). No more language
          laws.</p>
        <router-link to="/platform#language" class="proposal-button">
          <p class="proposal-button-text">Learn More</p>
        </router-link>
      </div>
    </div>
    <div class="panel-page climate">
      <div class="proposal-panel">
        <h2 class="principle-title">Climate Change</h2>
        <p class="call-to-action-text">Secure a healthy climate for our future and our children’s future.</p>
        <router-link to="/platform#climate" class="proposal-button">
          <p class="proposal-button-text">Learn more</p>
        </router-link>
      </div>
    </div>
    <div class="panel-page" id="summary-panel" style="background: rgba(119, 51, 222, 0.9);">
      <div class="panel-summary">
        <p class="panel-summary-text">
          UBI
          <br />Language Freedom
          <br />Climate Change
        </p>
      </div>
      <div class="profile-description" style="padding-top: 5%;">
        <div class="panel-line"></div>
        <div class="profile-description-text">
          <p class="panel-text">
            The Universal Party values individual rights. Each one of us is unique. That’s what makes life worth living
            for.
            <br />
            <br />Quebec has put collective identity too far. We commit to the abolition of
            <b>Bill 21 and Bill 101</b>.
          </p>
          <p class="panel-text" style="text-align: right;">
            SONG YANG
            <br />Founder, Leader
          </p>
          <router-link to="/platform" style="color:#fff;font-size:1.1rem;float: right;">View our entire platform
          </router-link>
        </div>
      </div>
    </div>
    <div class="panel-page call-to-sign">
      <div class="panel-summary call-to-sign-panel">
        <h2 class="principle-title" style="margin-bottom: 10px;">Help us register</h2>

        <p class="call-to-action-text">The party needs 100 signatures from all of Quebec to be officially authorized in
          the election.</p>
        <router-link to="/sign-up" class="proposal-button">
          <p class="proposal-button-text">Sign up</p>
        </router-link>
      </div>
    </div>
    <div class="panel-page email-subscription">
      <div class="panel-summary">
        <h2 class="principle-title" style="margin-bottom: 10px;">Subscribe to our newsletter</h2>
        <form class="newsletter-form">
          <input type="email" placeholder="sophie@example.com" aria-label="Newsletter" />
          <button class="proposal-button proposal-button-text">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// background image of montreal
div.home-page {
  background-image: url("~@/assets/montreal-hero.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 100%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #00000064;
  }
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
  font-size: 5rem;
  line-height: 71px;
  text-align: center;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.28);

  z-index: 1;

  @media (min-width: 992px) {
    font-size: 8rem;
  }
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
  display: flex;
  flex-direction: column;
  animation: appear-up 1s 1s forwards;
  padding-bottom: 20px;
  z-index: 1;

  @media only screen and (min-width: 435px) {
    justify-content: center;
    margin-left: 10%;
    width: 80%;
  }

  &>.panel-text {
    text-align: center;
  }
}

@keyframes appear-up {
  from {
    opacity: 0;
    visibility: visible;
    transform: translateY(-100%);
  }

  to {
    opacity: 1;
    visibility: visible;
    transform: translateY(-40%);
  }
}

.panel-text {
  text-align: left;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  opacity: 0;

  @media only screen and (min-width: 600px) {
    text-align: center;
  }
}

.onscroll-appearance {
  animation: appear-up-text 1s 0.5s forwards;
}

@keyframes appear-up-text {
  to {
    opacity: 1;
    color: white;
  }
}

.panel-button {
  align-self: center;
  text-align: center;
  padding: 10px 20px;
  font-size: 1.4rem;
  margin-top: 1rem;
  text-decoration: none;
  animation: appear-up-button 1s 1s forwards;
  opacity: 0;
  color: #000000;
}

@keyframes appear-up-button {
  to {
    opacity: 1;
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
  margin: 10vh 2vw;
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
  justify-content: center;
  margin: 0 auto;
  width: 80%;
  font-size: 1.3rem;

  @media only screen and (min-width: 1018px) {
    font-size: 1.5rem;
  }
}

.panel-line {
  height: 327px;
  border-left: 10px solid #f1eaf9;

  margin-left: 10%;
  // margin-top: 5%;
  margin-right: 10%;
}

.principle-panel {
  margin-top: 45vh;

  padding-top: 5%;
  padding-bottom: 5%;

  background-color: rgba(241, 234, 249, 0.9);

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1018px) {
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
}

.principle-title {
  margin: auto;

  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
}

.ubi {
  background-image: url("~@/assets/UBI.png");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 62% 100%;
  display: flex;
  justify-content: flex-end;


}

.proposal-panel {
  background: rgba(241, 234, 249, 0.85);

  display: flex;
  flex-direction: column;
  z-index: 1;

  @media only screen and (min-width: 600px) {
    margin-left: 10%;
    margin: 10rem 2rem;
    width: 40%;
  }
}

.proposal-button {
  margin: auto;

  padding: 20px;

  background: rgba(143, 96, 220, 0.85);

  display: flex;

  text-decoration: none;

  margin-bottom: 20px;
}

.proposal-button-text {
  margin: auto;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
}

.language {
  background-image: url("~@/assets/language.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  position: relative;
  justify-content: flex-end;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #00000064;
  }

  @media (min-width: 992px) {
    &>.proposal-panel {
      align-self: flex-end;
      justify-self: center;
      margin-right: 2rem;
    }
  }

}

.climate {
  background-image: url("~@/assets/greta.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  display: flex;
  justify-content: flex-end;

  @media (min-width: 992px) {
    align-items: flex-start;
  }
}

.panel-summary {
  background: rgba(255, 255, 255, 0.89);
  width: 500px;
  display: flex;
  flex-direction: column;

  z-index: 0;
  margin: auto;

  @media (min-width: 992px) {
    width: 50vw;
    align-self: center;
  }
}

.panel-summary-text {
  margin: auto;

  padding-top: 15px;
  padding-bottom: 15px;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 35px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #7234ce;
}

.call-to-sign {
  background-image: url("~@/assets/signature stock 2.jpeg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  display: flex;
  justify-content: center;
}

.call-to-action-text {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;

  padding-left: 5%;
  padding-right: 5%;

  color: #000000;
}

.email-subscription {
  background-image: url("~@/assets/laptop.jpeg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  justify-content: center;
}

.invert-svg {
  filter: invert(100%) sepia(86%) saturate(60%) hue-rotate(261deg) brightness(111%) contrast(100%);
}

#leader-message {
  width: 100%;
}

#summary-panel {
  width: 100%;

  @media only screen and (min-width: 435px) {
    width: 50%;
  }

  &>.profile-description {
    padding-bottom: 2rem;
  }
}

.panel {
  background: #C4C4C4;
  flex-direction: column;
  padding: 30px;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2rem;

  @media (min-width: 992px) {
    flex-direction: row;
  }

  &>input[type=email] {
    width: 100%;

    @media (min-width:992px) {
      width: 100%;
    }
  }

  &>.proposal-button {
    display: block;
    justify-self: center;
    text-align: center;
    width: 50%;
    margin-top: 1rem;
    border: transparent;

    @media (min-width:992px) {
      justify-self: flex-end;
      width: 30%;
      margin: 0 0 0 1rem;
    }
  }

}
</style>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Home extends Vue {
  mounted(): void {

    // animation on scroll
    // https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/
    const animationObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const textTarget = entry.target;

        if (entry.isIntersecting) {
          textTarget.classList.add('onscroll-appearance');
          return; // if we added the class, exit the function
        }
      });
    });

    // animation for all descriptive text blocks
    const panelText = document.querySelectorAll('.panel-text');

    if (panelText == null) throw new Error("panel-text not found");

    panelText.forEach(panel => {
      if (!panel.parentElement?.classList.contains("landing-panel"))
        animationObserver.observe(panel);
    });

    // change svg when background is dark
    const colorObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const menuSVG = document.querySelector("#menu");

        // console.log(menuSVG);

        if (menuSVG == null) throw new Error("Menu svg not found");

        if (entry.isIntersecting) {
          // change the menu svg
          menuSVG.classList.add("invert-svg");
        }
        else {
          menuSVG.classList.remove("invert-svg");
        }
      });

      // console.log("In color observer")

    }, { rootMargin: "10px" });

    const menuItem = document.querySelector(".call-to-sign");

    if (menuItem == null) throw new Error("call to sign not found");

    colorObserver.observe(menuItem);
  }

  // scrolling to sections
  scrollMeTo(refName: string): void {
    var element = this.$refs[refName];
    var top = (element as HTMLElement).offsetTop;
    window.scrollTo(0, top);
  }
}

</script>
