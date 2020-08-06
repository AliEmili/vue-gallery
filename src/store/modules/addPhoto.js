// import axios from "axios";

const state = {};

const getters = {};

const actions = {
    async addPhotoAction({ commit }, photo) {
        console.log(photo)
        commit('yechizi', 'yechizi');
    }
}

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
};