<template>
    <div class="about-page">
        <div class="page-header">
            <p class="page-header-text">DONATE & VOLUNTEER</p>
        </div>
        <div class="page-description-box">
            <p class="page-description-text" style="text-align: center;">
                It is not possible to
                <b>donate</b> to the party yet, because we are not officially registered. Once we
                reach
                100 signatures, we can file an application to the electoral office. Help us reach that milestone by
                giving your name!
            </p>
            <router-link to="/sign-up" class="call-to-action-button" style="margin: auto;">
                <div class="call-to-action-button-text">SIGN YOUR NAME</div>
            </router-link>

            <p class="page-description-text" style="text-align: center; padding-top: 20px;">
                To
                <b>volunteer</b>, you may write an email of interest to
                <a
                    href="mailto:universalPartyQC@gmail.com"
                >universalPartyQC@gmail.com</a>
                <br />
                <br />State your interests and introduce yourself!
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/scss/about-page.scss";
</style>