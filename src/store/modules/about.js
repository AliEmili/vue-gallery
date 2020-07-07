import axios from "axios";

const state = {
    headTitle: "",
    paragraph: ""
};

const getters = {
    headTitle: state => state.headTitle,
    paragraph: state => state.paragraph
};

const actions = {
    async fetchAbout({ commit }) {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/photos"
        );

        commit("setHeadTitle", response.data[0].title.substring(0, 6));
        commit("setParagraph", response.data[0].title);
    }
}

const mutations = {
    setHeadTitle: (state, headTitle) => {
        state.headTitle = headTitle;
    },
    setParagraph: (state, paragraph) => {
        state.paragraph = paragraph;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};