<template>
  <NavigationBar />
  <router-view />
  <SiteFooter />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavigationBar from './components/NavigationBar.vue';
import SiteFooter from './components/SiteFooter.vue';

@Options({
  components: {
    NavigationBar,
    SiteFooter
  }
})
export default class App extends Vue { }
</script>

<style lang="scss">
</style>
