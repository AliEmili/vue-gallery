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
                "https://jsonplaceholder.typicode.com/photos?_limit=2"
            );
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