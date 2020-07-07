import Vue from "vue";
import Vuex from "vuex";
import about from "./modules/about";
import developer from "./modules/developer";
Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        about,
        developer
    }
});