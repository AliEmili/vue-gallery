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
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/photos?_limit=2"
        );
        commit("setDeveloper", response.data);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
};