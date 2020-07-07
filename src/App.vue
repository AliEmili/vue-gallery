<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
export default {
  name: "App",
  components: {
    navbar
  }
};
</script>

<style>
*{
  box-sizing: border-box !important;
  direction: rtl !important;
}
#app {
  font-family: 'Roboto', Avenir, Helvetica, Arial, sans-serif;
}
span {
    text-transform: capitalize;
}
</style>
