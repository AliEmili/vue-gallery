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
                "//localhost:8080/about"
            );
            commit("setDeveloper", response.data.developers);
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