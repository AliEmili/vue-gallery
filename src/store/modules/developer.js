import axios from "axios";

const state = {
    developers: []
};

const getters = {
    developers: state => state.developers
}

const mutations = {
    setDeveloper: (state, developers) => state.developers = developers
}

const actions = {
    async fetchDeveloper({ commit }) {
        try {
            const response = await axios.get(
                "/server/about"
            );
            console.log("fetchdeveloper response :",
                response.data);
            commit("setDeveloper", response.data);
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