import Vue from "vue";
import Vuex from "vuex";
import about from "./modules/about";
import developer from "./modules/developer";
import description from "./modules/description";
import gallery from './modules/gallery';
import photo from "./modules/photo";
Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        about,
        developer,
        description,
        gallery,
        photo
    }
});