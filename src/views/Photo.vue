<template>
    <div class="container">
        <div class="card">
            <img :src=pathCom(picData.imagePath) alt="pic">
            <h5>تیتر عکس :</h5>
            <p>{{picData.title}}</p>
            <h5>توضیحات :</h5>
            <p>{{picData.info}}</p>
            <h5>میانگین امتیاز این تصویر :</h5>
            <div class="rate-div">
                <star-rating :rtl="true" :rating=avgRating :read-only="true" :increment="0.01"></star-rating>
            </div>
            <h5>به این تصویر امتیاز دهید :</h5>
            <label>(با کلیک بر روی امتیاز مورد نظر، امتیاز شما ثبت خواهد شد)</label>
            <div class="rate-div">
                <star-rating @rating-selected="setRating" v-model="rating" :rtl="true" :increment="0.5"></star-rating>
            </div>
            <h5>برای این عکس نظری بنویسید :</h5>
            <form>
                <textarea placeholder="متن نظر" v-model="commented" name="comment" id="comment"></textarea>
                <br>
                <a @click="addComment" class="waves-effect waves-light btn btn-large" id="comment-submit">ثبت نظر</a>
                <a @click="goToComments(nth)" class="waves-effect waves-light btn btn-large" id="see-comments">مشاهده نظرات</a>
            </form>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
    name: "Photo",
    props: ["nth"],
    data(){
        return{
            rating: 0,
            commented: ""
        }
    },
    methods: {
        ...mapActions(["fetchPic","addToComment", "clearPic","rated", "fetchAvg"]),
        setRating: function(){
            if(!localStorage.getItem('user')){
                this.$router.push("/login");
            }else{
                let objid = this.nth;
                let rateNum = this.rating;
                let rateobj = {id: objid, rate: rateNum}
                this.rated(rateobj);
            }
        },
        goToComments: function(nth){
            this.$router.push(`${nth}/comments`);
        },
        addComment: function(){
            if(!localStorage.getItem('user')){
                this.$router.push("/login");
            }else{
                if(this.commented){
                    let objid = this.nth
                    let objcomment = this.commented;
                    let obj = {id: objid,comment: objcomment}
                    this.addToComment(obj);
                    this.$router.push(`${this.nth}/comments`);
                }
            }
        },
        pathCom: function(url){
            console.log("photos : url = ",url);
            if(process.env.BACKEND_BASE_URL){
                url = process.env.BACKEND_BASE_URL+url;
            }
            else if(url && url[0] !== '/'){
                url = '/' + url;
            }
            
            return url
        }
    },
    created(){
        this.fetchPic(this.nth);
        this.fetchAvg(this.nth);
    },
    computed: {
        ...mapGetters(["picData", "avgRating"]),
    },
    destroyed(){
        this.clearPic();
    }
}
</script>

<style scoped>
    .img-cont{
        width: 500px;
        height: 500px;
    }
    .container {
        width: 600px;
        margin: auto !important;
        text-align: center;
    }
    img {
        height: 90%;
        width: 90%;
        padding: 20px !important;   
    }
    .rate-div{
        width: 50%;
        margin: auto;
    }
    form {
        width: 60%;
        margin: auto;
    }
    h5{
        margin-bottom: 20px !important;
        margin-top: 10px !important;
    }
    a{
        margin: 15px !important;
    }
    textarea{
        width: 100%;
        height: 100px;
    }
    input::placeholder,
    textarea::placeholder{
        color: black;
        opacity: 0.5;
        padding: 10px 5px;
    }
    input{
        border: 1px solid rgba(0,0,0,0.5) !important;
    }
</style>