import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import StarRating from 'vue-star-rating';

Vue.config.productionTip = false;
Vue.component('star-rating', StarRating);
new Vue({
    router,
    store,
    created() {
        const userString = localStorage.getItem('user');
        if (userString) {
            const userData = JSON.parse(userString);
            this.$store.commit('setLoginUser', userData);
        }
    },
    render: h => h(App)
}).$mount("#app");