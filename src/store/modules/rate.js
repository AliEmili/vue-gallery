import axios from "axios";

const state = {
    rate: ""
};

const getters = {
    user: state => state.rate
};

const actions = {
    async register({ commit }, post) {
        try {
            const response = await axios.post(`//localhost:8080/gallery/${post.id}/rate`, { rate: post.rate });
            console.log(response.data);
            commit('setRate', response.data);
        } catch (err) {
            console.log(err);
        }
    }
}

const mutations = {
    setRate: (state, rate) => state.rate = rate
};

export default {
    state,
    getters,
    actions,
    mutations
};