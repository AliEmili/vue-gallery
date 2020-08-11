<template>
    <div class="caption pinks center-align">
        <h2>{{mainTitle}}</h2>
        <h5 class="grey-text text-lighten-3 hide-on-small-only">{{mainParagraph}}</h5>
        <router-link v-if="!loggedIn" to="/signup" class="btn btn-large">ثبت نام</router-link>
        <h5 v-else class="grey-text text-lighten-4">شما وارد سیستم شده اید.</h5>
        <router-link v-if="!loggedIn" to="/login" class="btn btn-large">ورود</router-link>
        <a v-else @click="clickedSignOut" class="btn btn-large indigo">خروج از سیستم</a>
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import {authComputed } from '../store/helper';
export default {
  name: "description",
  methods: {
    ...mapActions(["fetchHome", "signOut"]),
    clickedSignOut: function(){
      console.log("sign out clicked");
      this.signOut();
    }
  },
  computed: {
    ...mapGetters(["mainTitle","mainParagraph"]),
    ...authComputed
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