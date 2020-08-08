import axios from "axios";

const state = {
    picData: {}
};

const getters = {
    picData: state => state.picData.imagePath
}

const mutations = {
    setPicUrl: (state, picUrl) => state.picData = picUrl,
    clearPic: (state, picData) => state.picData = picData
}

const actions = {
    async fetchPic({ commit }, picId) {
        try {
            const response = await axios.get(
                `//localhost:8080/gallery/${picId}`
            );
            commit("setPic", response.data);
        } catch (err) {
            console.log(err);
        }
    },
    async clearPic({ commit }) {
        try {
            const empty = {};
            commit("clearPic", empty);
        } catch (err) {
            console.log(err);
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
};