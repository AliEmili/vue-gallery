import axios from "axios";

const state = {
    user: {}
};

const getters = {
    userFields: state => state.user,
    userError: state => state.error
};

const actions = {
    async register({ commit }, userFields) {
        try {
            const response = await axios.post("/signup", userFields);
            console.log("register response", response.data);
            commit('setUser', response.data);
        } catch (err) {
            console.log(err);
        }
    }
}

const mutations = {
    setUser: (state, userData) => state.user = userData,
    setError: (state, error) => state.error = error
};

export default {
    state,
    getters,
    actions,
    mutations
};