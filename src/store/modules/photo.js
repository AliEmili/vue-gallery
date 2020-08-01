import axios from "axios";

const state = {
    picUrl: []
};

const getters = {
    picUrl: state => state.picUrl
}

const mutations = {
    setPicUrl: (state, picUrl) => state.picUrl = picUrl
}

const actions = {
    async fetchPicUrl({ commit }, picId) {
        try {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/photos/${picId}`
            );
            commit("setPicUrl", response.data);
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