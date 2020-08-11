import axios from "axios";

const state = {
    rate: null,
    avgRating: null
};

const getters = {
    user: state => state.rate,
    avgRating: state => state.avgRating
};

const actions = {
    async rated({ commit }, post) {
        try {
            console.log("post in rated : ", post);
            let userInfo = await localStorage.getItem('user');
            let userToken = await JSON.parse(userInfo);
            const response = await axios.post(`/gallery/${post.id}/rate`, { rate: post.rate }, {
                headers: {
                    token: userToken
                }
            });
            console.log("rated response", response.data);
            commit('setRate', response.data);
            const res = await axios.get(`/gallery/${post.id}/rate`);
            commit('setAvgRate', res.data);
        } catch (err) {
            console.log(err);
        }
    },
    async fetchAvg({ commit }, id) {
        try {
            const response = await axios.get(`/gallery/${id}/rate`);
            console.log("fetchavg response", response.data);
            commit('setAvgRate', response.data);
        } catch (err) {
            console.log(err);
        }
    }
}

const mutations = {
    setRate: (state, rate) => state.rate = rate,
    setAvgRate: (state, avgRating) => state.avgRating = avgRating.avgRate
};

export default {
    state,
    getters,
    actions,
    mutations
};