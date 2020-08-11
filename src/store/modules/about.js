// import axios from "axios";

// const state = {
//     headTitle: "",
//     paragraph: ""
// };

// const getters = {
//     headTitle: state => state.headTitle,
//     paragraph: state => state.paragraph
// };

// const actions = {
//     async fetchAbout({ commit }) {
//         try {
//             const response = await axios.get(
//                 "//localhost:8080/about"
//             );
//             console.log(response.data);
//             commit("setHeadTitle", response.data[0].title);
//             commit("setParagraph", response.data[0].info);
//         } catch (err) {
//             console.log(err);
//         }
//     }
// }

// const mutations = {
//     setHeadTitle: (state, headTitle) => {
//         state.headTitle = headTitle;
//     },
//     setParagraph: (state, paragraph) => {
//         state.paragraph = paragraph;
//     }
// };

// export default {
//     state,
//     getters,
//     actions,
//     mutations
// };