import axios from "axios";

const state = {
    userLogin: null
};

const getters = {
    userLogin: state => state.userLogin,
    loggedIn: state => !!state.userLogin
}

const mutations = {
    setLoginUser: (state, userComitted) => {
        state.userLogin = userComitted;
        localStorage.setItem('user', JSON.stringify(userComitted));
    },
    clearUser: (state, empty) => {
        state.userLogin = empty;
        localStorage.removeItem('user');
    }
}

const actions = {
    async login({ commit }, userInput) {
        try {
            const response = await axios.post(
                '/server/login', userInput
            );
            console.log("login response", response.data);
            if (response.data.token) {
                commit("setLoginUser", response.data.token);
            }
        } catch (err) {
            console.log(err);
        }
    },
    async signOut({ commit }) {
        try {
            console.log("sign out log");
            commit("clearUser", null);
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