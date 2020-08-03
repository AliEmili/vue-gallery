import axios from "axios";

const state = {
    comments: []
};

const getters = {
    comments: state => state.comments,
};

const actions = {
    async fetchComments({ commit }, id) {
        try {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/photos/${id}/comments?_limit=10`
            );
            console.log(response.data);
            commit("setComments", response.data);
        } catch (err) {
            console.log(err);
        }
    },
    async addToComment({ commit }, payload) {
        try {
            const response = await axios.post(
                `https://jsonplaceholder.typicode.com/photos/${payload.id}/comments`, { name: payload.name, email: 'sth', body: payload.comment }
            )
            commit('newComment', response.data);
        } catch (err) {
            console.log(err);
        }
    }
}

const mutations = {
    setComments: (state, comments) => {
        state.comments = comments;
    },
    newComment: (state, comment) => state.comments.unshift(comment)
};

export default {
    state,
    getters,
    actions,
    mutations
};