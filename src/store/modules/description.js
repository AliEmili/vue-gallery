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
                "https://jsonplaceholder.typicode.com/photos"
            );

            commit("setMainTitle", response.data[0].title.substring(0, 6));
            commit("setMainParagraph", response.data[0].title);
        } catch (err) {
            console.log(err);
        }
    }
}

const mutations = {
    setMainTitle: (state, mainTitle) => {
        state.mainTitle = mainTitle;
    },
    setMainParagraph: (state, mainParagraph) => {
        state.mainParagraph = mainParagraph;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};