<template>
  <div class="about-page">
    <!-- Purple about header -->
    <div class="page-header">
      <p class="page-header-text">ABOUT</p>
    </div>
    <!-- Description -->
    <div class="page-description-box">
      <p class="page-description-text">
        The Universal Party is a provincial political party in Quebec, Canada. The idea for the party started in 2020 by Song Yang.
        <br />
        <br />The party aims to be a full-on party that tackles all issues from a consistent ideology centered around individual rights and a left-of-center policy guideline.
        <br />
        <br />Although inspired by the late Equality Party, the Universal Party is not a one-issue party nor a Liberal protest party. We will never merge with the Liberal establishment.
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.about-page {
  display: flex;
  flex-direction: column;

  width: 100%;
}

.page-header {
  height: 112px;

  margin-top: 61px;

  background: rgba(143, 96, 220, 0.85);

  display: flex;
}

.page-header-text {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 35px;
  display: flex;
  align-items: center;
  text-align: center;

  margin: auto;

  color: #ffffff;
}

.page-description-box {
  background: rgba(255, 255, 255, 0.89);
  padding: 5%;
}

.page-description-text {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;

  color: #000000;
}
</style>