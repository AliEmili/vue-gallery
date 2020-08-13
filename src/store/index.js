import Vue from "vue";
import Vuex from "vuex";
// import about from "./modules/about";
import developer from "./modules/developer";
import description from "./modules/description";
import gallery from './modules/gallery';
import photo from "./modules/photo";
import comments from "./modules/comments";
import signup from "./modules/signup";
import rate from "./modules/rate";
import login from "./modules/login";

Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        developer,
        description,
        gallery,
        photo,
        comments,
        signup,
        rate,
        login
    }
});