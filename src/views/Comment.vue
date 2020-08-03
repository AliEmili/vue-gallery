<template>
    <div>
        <div class="cards">
            <h3>نظرات</h3>
            <div class="img-div">
                <img :src=picUrl.url alt="pic">
            </div>
            <ul class="card" v-for="comment in comments" :key="comment.id">
                <li class="email">{{comment.email}}</li>
                <li class="comment-text">{{comment.body}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
    name: "Comment",
    props: ["nth"],
    methods: {
        ...mapActions(["fetchPicUrl","fetchComments"])
    },
    created(){
        this.fetchPicUrl(this.nth),
        this.fetchComments(this.nth)
    },
    computed: {
        ...mapGetters(["picUrl","comments"])
    }
}
</script>

<style scoped>
    .cards {
        width: 80%;
        height: auto;
        margin: 20px auto;
    }
    .img-div {
        width: 200px;
        height: 200px;
        margin: auto;
        padding: 20px;
    }
    img {
        width: 100%;
        border-radius: 20px;
    }
    /* div {
        text-align: center;
    } */
    h3 {
        padding: 20px 0;
    }
    .email {
        font-weight: bolder;
    }
    li{
        padding: 20px;
    }
</style>