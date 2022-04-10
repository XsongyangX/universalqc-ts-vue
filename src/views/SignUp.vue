<template>
  <div class="about-page">
    <div
      class="page-description-box"
      style="margin-top: 61px; display: flex; flex-direction: column"
    >
      <p class="oswald-header">SIGNATURES NEEDEED</p>
      <p class="page-description-text">
        According to the law, a new political party needs 100 signatures from
        the Quebec electorate. The 100 people become the founding members of the
        party. The party is then allowed to run candidates and receive
        donations.
        <br />
        <br />
        At the Universal Party, membership is free and comes with no obligation.
        You do not have to vote for the party even if you signed your name. No
        one would sign up for anything if their vote was bound.
        <br />
        <br />
        Instructions on how to sign below.
      </p>
    </div>
    <div
      class="call-to-action-button"
      style="margin: auto; margin-top: 25px; margin-bottom: 25px"
    >
      <div class="call-to-action-button-text">DOWNLOAD FORM</div>
    </div>

    <div
      class="page-header"
      style="margin-top: 0; background: rgba(143, 96, 220, 0.95)"
    >
      <p class="page-header-text">INSTRUCTIONS</p>
    </div>

    <div class="page-description-box">
      <p class="page-description-text">
        You need a PDF reader to fill up the form digitally. Otherwise, you have
        to print out the form and take a picture of it once you are done.
        <br />
        <br />
        <ol class="page-description-text">
        <li>Download the form.</li>
        <li>Fill up the name of the party: Parti universel / Universal Party</li>
        <li>
            Fill up your personal information so the electoral office can
            identify you.
        </li>
        <li>
            Give yourself a random membership number of at least 6 digits. No one
            else should have the same number.
        </li>
        <li>Set the membership expiry date to December 31, 2025.</li>
        <li>Write a $0 membership fee.</li>
        <li>Sign your name and write the date in the middle section.</li>
        <li>Leave the last signature box empty. That’s for me.</li>
        <li>Email the form to <a href="mailto:universalpartyQC@gmail.com">universalpartyQC@gmail.com</a></li>
        </ol>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/about-page.scss";
</style>

<style lang="scss">
body {
  background-image: url("~@/assets/signature stock 2.jpeg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 100%;
}

.invert-svg {
  filter: invert(100%) sepia(86%) saturate(60%) hue-rotate(261deg)
    brightness(111%) contrast(100%);
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class SignUp extends Vue {
  mounted(): void {
    const menuSVG = document.querySelector("#menu");
    menuSVG?.classList.add("invert-svg");
  }
}
</script>
