import axios from "axios";

const state = {
    userLogin: {}
};

const getters = {
    userLogin: state => state.userLogin
}

const mutations = {
    setLoginUser: (state, userComitted) => {
        state.userLogin = userComitted;
        localStorage.setItem('user', JSON.stringify(userComitted));
    },
    clearUser: (state, empty) => {
        state.userLogin = empty;
        localStorage.removeItem('user');
        state.user = empty;
        location.reload();
    }
}

const actions = {
    async login({ commit }, userInput) {
        try {
            const response = await axios.post(
                '//localhost:8080/login', userInput
            );
            console.log(response.data.token);
            commit("setLoginUser", response.data);
        } catch (err) {
            console.log(err);
        }
    },
    async signOut({ commit }) {
        try {
            commit("clearUser", {});
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