<template>
  <NavigationBar />
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavigationBar from './components/NavigationBar.vue';

@Options({
  components: {
    NavigationBar
  }
})
export default class App extends Vue { }
</script>

<style lang="scss">
</style>
