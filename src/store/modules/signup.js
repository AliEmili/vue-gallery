import axios from "axios";

const state = {
    user: {}
};

const getters = {
    user: state => state.user
};

const actions = {
    async register({ commit }, user) {
        try {
            const response = await axios.post("//localhost:8080/signup", user);
            console.log(response.data);
            commit('setUser', response.data);
        } catch (err) {
            console.log(err);
        }
    }
}

const mutations = {
    setUser: (state, user) => state.user = user
};

export default {
    state,
    getters,
    actions,
    mutations
};