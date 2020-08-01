<template>
  <div class="about">
    <h2>{{headTitle}}</h2>
    <p>{{paragraph}}</p>
    <developer/>
  </div>
</template>




<script>
import developer from "@/components/developer";
import {mapGetters, mapActions} from "vuex";
export default {
  name: "About",
  components: {
    developer
  },
  methods: {
    ...mapActions(["fetchAbout"])
  },
  computed: {
    ...mapGetters(["headTitle","paragraph"])
  },
  created(){
    this.fetchAbout();
  }
}
</script>



<style scoped>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .about {
    width: 80%;
    margin: auto;
    text-align: center;
  }
  h2{
    padding-top: 20px !important;
  }
  p{
    margin: 40px 0;
  }
</style>