<template>
    <div class="caption pinks center-align">
        <h2>{{mainTitle}}</h2>
        <h5 class="grey-text text-lighten-3 hide-on-small-only">{{mainParagraph}}</h5>
        <a href="/signup" class="btn btn-large">ثبت نام</a>
        <a href="/login" class="btn btn-large">ورود</a>
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
  name: "description",
  methods: {
    ...mapActions(["fetchHome"])
  },
  computed: {
    ...mapGetters(["mainTitle","mainParagraph"])
  },
  created(){
    this.fetchHome();
  }
}
</script>

<style scoped>
  h5 {
    margin-top: 50px;
    padding-top: 50px;
  }
  h2{
    margin: 0;
    padding-top: 100px;
  }
  a {
    margin: 60px 10px;
  }
  .pinks {
    color: #002F43;
  }
  @media (max-width: 720px) {
    h2 {
      padding-top: 10px;
    }
  }
</style>