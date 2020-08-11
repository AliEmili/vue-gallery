import axios from "axios";

const state = {};

const getters = {};

const actions = {
    async addPhotoAction({ commit }, photo) {
        try {
            let userInfo = await localStorage.getItem('user');
            let userToken = await JSON.parse(userInfo);
            console.log("userInfo in addphoto = ", userInfo);
            console.log("usertoken in addphoto = ", userToken);
            await axios({
                method: 'post',
                data: photo,
                headers: { 'token': userToken, 'Content-Type': 'multipart/form-data' },
                url: '/gallery'
            })
            console.log(commit);
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