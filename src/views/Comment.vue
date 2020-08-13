<template>
    <div>
        <div class="cards">
            <div class="header-div">
                <h3>نظرات</h3>
            </div>
            <div class="img-div">
                <img :src=pathCom(picData.imagePath) alt="pic">
            </div>
            <ul class="card" v-for="comment in comments" :key="comment._id">
                <li class="email">{{comment.byWho}}</li>
                <li class="comment-text">{{comment.commentText}}</li>
                <li class="comment-text">متن کامنت</li>
            </ul>
            <p v-if="lenCom(comments) == 0" class="card">نظری وجود ندارد.</p>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
    name: "Comment",
    props: ["nth"],
    methods: {
        ...mapActions(["fetchPic","fetchComments"]),
        pathCom: function(url){
            console.log("comment : url = ",url);
            if(process.env.BACKEND_BASE_URL){
                url = process.env.BACKEND_BASE_URL+url;
            }
            return url
        },
        lenCom: function(comments){
            return comments.length;
        }
    },
    created(){
        this.fetchPic(this.nth),
        this.fetchComments(this.nth)
    },
    computed: {
        ...mapGetters(["picData","comments"])
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
    li, p{
        padding: 20px;
    }
    .header-div{
        text-align: center;
    }
    p.card{
        text-align: center;
    }
</style>