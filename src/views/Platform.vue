<template>
  <div class="about-page">
    <div class="page-header">
      <p class="page-header-text">PARTY PLATFORM</p>
    </div>
  </div>
  <!-- Leave a margin for the background -->
  <div class="page-description-box" style="margin-top: 275px;">
    <p class="page-description-large-text">
      In our vision, Quebec is a province where all can reach their full human potential and have a healthy environment
      for the future.
    </p>
  </div>
  <div class="page-minor-header" style="background-color: rgba(241, 234, 249, 0.97);">
    <p class="page-minor-header-text" style="font-weight: 700;">
      KEY PROPOSALS
    </p>
  </div>

  <div style="background-color: white; display: flex; flex-direction: column;">
    <!-- UBI -->
    <details>
      <summary>
        <p class="page-header-text">UNIVERSAL BASIC INCOME (UBI)</p>
        <span class="icon"><img src="@/assets/to_expand.svg" alt="Indicator for expansion"></span>
      </summary>
      <p>
        UBI description
      </p>
    </details>
    <!-- Language -->
    <details>
      <summary>
        <p class="page-header-text">LANGUAGE FREEDOM</p>
        <span class="icon"><img src="@/assets/to_expand.svg" alt="Indicator for expansion"></span>
      </summary>
      <p>
        Language description
      </p>
    </details>
    <!-- Climate change -->
    <details>
      <summary>
        <p class="page-header-text">CLIMATE CHANGE</p>
        <span class="icon"><img src="@/assets/to_expand.svg" alt="Indicator for expansion"></span>
      </summary>
      <p>
        Climate change description
      </p>
    </details>
    <div class="page-header" style="margin-top: 0; background: rgb(178, 178, 178);">
      <p class="page-header-text" style="color: black;">POLICIES BY TOPIC</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/about-page.scss";

details {
  user-select: none;
}

details>summary span.icon {
  transition: all 0.3s;
  margin-top: auto;
}

details[open] summary span.icon {
  transform: rotate(180deg);
}

summary {
  display: flex;
  cursor: pointer;

  background: rgba(143, 96, 220);
  height: 112px;

  margin-bottom: 10px;
}

summary::-webkit-details-marker {
  display: none;
}
</style>

<style lang="scss">
.platform-background {
  background-image: url("~@/assets/tech meeting flipped.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 85% 100%;

  z-index: -1;
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Platform extends Vue {
  mounted(): void {
    // signature background
    const background = document.body;
    background?.classList.add("platform-background");
  }

  unmounted(): void {
    // signature background
    const background = document.body;
    background?.classList.remove("platform-background");
  }
}
</script>