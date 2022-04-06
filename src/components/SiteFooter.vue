<template>
    <div class="footer-panel">
        <p class="footer-title footer-padding">
            <router-link to="/" class="clickable-link">UNIVERSAL PARTY</router-link>
        </p>
        <p class="footer-description footer-padding">
            <router-link to="/news" class="clickable-link">News</router-link>
            <br />
            <router-link to="/platform" class="clickable-link">Platform</router-link>
            <br />
            <router-link to="/candidates" class="clickable-link">Candidates</router-link>
            <br />
            <router-link to="/donate-and-volunteer" class="clickable-link">Donate & Volunteer</router-link>
            <br />
            <router-link to="/contact" class="clickable-link">Contact us</router-link>
            <br />
            <router-link to="/about" class="clickable-link">About</router-link>
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

.clickable-link {
    text-decoration: none;
    color: white;
}

.clickable-link:hover {
    color: white;
    text-decoration: underline;
}
</style>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class SiteFooter extends Vue { }
</script>