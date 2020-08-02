<template>
    <div class="container">
        <div class="card">
            <img :src=picUrl.url alt="pic">
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
                <input type="text" placeholder="نام">
                <textarea placeholder="نظر" name="comment" id="comment"></textarea>
                <br>
                <a class="waves-effect waves-light btn btn-large" id="comment-submit">ثبت نظر</a>
                <a class="waves-effect waves-light btn btn-large" id="see-comments">مشاهده نظرات</a>
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
            avgRating: 0.5
        }
    },
    methods: {
        ...mapActions(["fetchPicUrl"]),
        setRating: function(rating){
            this.rating = rating
            console.log(this.rating);
        }
        
    },
    created(){
        this.fetchPicUrl(this.nth)
    },
    computed: {
        ...mapGetters(["picUrl"])
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