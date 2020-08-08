import axios from "axios";

const state = {};

const getters = {};

const actions = {
    async addPhotoAction({ commit }, photo) {
        try {
            let userInfo = await localStorage.getItem('user');
            let userToken = await JSON.parse(userInfo).token;
            console.log(userToken, photo);
            const response = await axios.post(
                'http://127.0.0.1:8080/gallery', {
                    photo,
                }, {
                    headers: {
                        token: userToken
                    }
                }
            )
            console.log(response.data);
            commit('ye', 'yd');
        } catch (err) {
            console.log(err);
        }
    }
}

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
};