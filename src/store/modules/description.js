import axios from "axios";

const state = {
    mainTitle: "",
    mainParagraph: ""
};

const getters = {
    mainTitle: state => state.mainTitle,
    mainParagraph: state => state.mainParagraph
};

const actions = {
    async fetchHome({ commit }) {
        try {
            const response = await axios.get(
                "http://localhost:8080/"
            );
            commit("setHome", response.data[0]);
        } catch (err) {
            console.log(err);
        }
    }
}

const mutations = {
    setHome: (state, setHome) => {
        state.mainTitle = setHome.title;
        state.mainParagraph = setHome.info;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};