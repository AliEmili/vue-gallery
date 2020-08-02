<template>
  <div id="app">
    <navbar />
    <router-view />
    <footerText />
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import footerText from "@/components/footerText.vue";
export default {
  name: "App",
  components: {
    navbar,
    footerText
  }
};
</script>

<style>
*{
  box-sizing: border-box !important;
  direction: rtl !important;
  outline: none;
}
h1,h2,h3,h4,h5 {
  margin: 0 !important;
}
@font-face {
  font-family: vazir;
  src: url("../public/Vazir.ttf");
}
#app {
  font-family: vazir, 'Roboto';
}
span {
    text-transform: capitalize;
}
a{
  opacity: 0.9 !important;
  border-radius: 6px !important;
}
</style>