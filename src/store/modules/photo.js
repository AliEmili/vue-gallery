import axios from "axios";

const state = {
    picData: {}
};

const getters = {
    picData: state => state.picData
}

const mutations = {
    setPic: (state, picData) => state.picData = picData,
    clearPic: (state, picData) => state.picData = picData
}

const actions = {
    async fetchPic({ commit }, picId) {
        try {
            console.log("picid in fetchpic :", picId);
            const response = await axios.get(
                `/server/gallery/${picId}`
            );
            console.log("response fetchpic", response.data);
            commit("setPic", response.data);
        } catch (err) {
            console.log(err);
        }
    },
    async clearPic({ commit }) {
        try {
            const empty = {};
            console.log("pic cleared");
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