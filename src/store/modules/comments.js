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
                `//localhost:8080/gallery/${id}/comments`
            );
            console.log(response.data);
            commit("setComments", response.data);
        } catch (err) {
            console.log(err);
        }
    },
    async addToComment({ commit }, payload) {
        try {
            let userInfo = await localStorage.getItem('user');
            let userToken = await JSON.parse(userInfo).token;
            const response = await axios.post(`//localhost:8080/gallery/${payload.id}/comments`, { commentText: payload.comment }, { headers: { token: userToken } })
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