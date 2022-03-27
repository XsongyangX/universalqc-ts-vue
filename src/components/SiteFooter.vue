<template>
    <div class="footer-panel">
        <p class="footer-title footer-padding">UNIVERSAL PARTY</p>
        <p class="footer-description footer-padding">
            Platform
            <br />Candidates
            <br />Donate & Volunteer
            <br />Contact us
            <br />About
        </p>
        <p class="copyright">Copyright 2022 © Song Yang</p>
    </div>
</template>

<style lang="scss">
.footer-panel {
    background-color: #444444;
    width: 100%;

    display: flex;
    flex-direction: column;
}
.footer-padding {
    padding-left: 35px;
    padding-top: 22px;
}

.footer-title {
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;

    color: #ffffff;
}

.footer-description {
    font-family: Open Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 1.8;
    letter-spacing: 0em;
    text-align: left;

    color: #ffffff;
}

.copyright {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 200;
    font-size: 20px;
    line-height: 27px;

    align-items: center;
    text-align: center;

    color: #ffffff;

    display: flex;
    margin: auto;

    padding-bottom: 15px;
}
</style>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class SiteFooter extends Vue { }
</script>