import axios from "axios";

const state = {
    photos: []
};

const getters = {
    photos: state => state.photos
}

const mutations = {
    setPhotos: (state, photos) => state.photos = photos
}

const actions = {
    async fetchPhotos({ commit }) {
        try {
            const response = await axios.get(
                "/server/gallery"
            );
            console.log("fetchphotos in gallery response : ", response.data);
            commit("setPhotos", response.data);
        } catch (err) {
            console.log(err);
        }
    },
    async addPhotoAction({ commit, dispatch }, photo) {
        try {
            let userInfo = await localStorage.getItem('user');
            let userToken = await JSON.parse(userInfo);
            console.log("userInfo in addphoto = ", userInfo);
            console.log("usertoken in addphoto = ", userToken);
            await axios({
                method: 'post',
                data: photo,
                headers: { 'token': userToken, 'Content-Type': 'multipart/form-data' },
                url: '/server/gallery'
            })
            console.log(commit, this);
            dispatch('fetchPhotos')
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