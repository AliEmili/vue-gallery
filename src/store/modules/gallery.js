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
                "https://jsonplaceholder.typicode.com/photos?_limit=16"
            );
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