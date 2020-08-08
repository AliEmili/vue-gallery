import axios from "axios";

const state = {
    user: {}
};

const getters = {
    userFields: state => state.user
};

const actions = {
    async register({ commit }, userFields) {
        try {
            const response = await axios.post("//localhost:8080/signup", userFields);
            console.log(response.data);
            commit('setUser', response.data);
        } catch (err) {
            console.log(err);
        }
    }
}

const mutations = {
    setUser: (state, userData) => state.user = userData
};

export default {
    state,
    getters,
    actions,
    mutations
};