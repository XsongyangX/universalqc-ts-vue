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
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap");

#app {
  font-family: Open Sans, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
