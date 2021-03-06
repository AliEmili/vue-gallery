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
            console.log("id in fetchcomment = ", id)
            const response = await axios.get(
                `/server/gallery/${id}/comments`
            );
            console.log("response fetchcomment: ", response.data);
            commit("setComments", response.data);
        } catch (err) {
            console.log(err);
        }
    },
    async addToComment({ commit, dispatch }, payload) {
        try {
            let userInfo = await localStorage.getItem('user');
            let userToken = await JSON.parse(userInfo);
            console.log("userInfo in addtocomment = ", userInfo);
            console.log("usertoken in addtocomment = ", userToken);
            console.log("payload in addtocomment: payload");
            const response = await axios.post(`/server/gallery/${payload.id}/coments`, { commentText: payload.comment }, { headers: { token: userToken } })
            commit('newComment', response.data);
            // this.fetchComments(payload.id);
            dispatch('fetchComments', payload.id)
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