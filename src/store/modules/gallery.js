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
                "/gallery"
            );
            console.log("fetchphotos in gallery response : ", response.data);
            commit("setPhotos", response.data);
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