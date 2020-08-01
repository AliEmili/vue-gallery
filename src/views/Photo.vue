<template>
    <div class="container">
        <div class="card">
            <img :src=picUrl.url alt="pic">
            <h5>به این تصویر امتیاز دهید :</h5>
            <h5>برای این عکس نظری بنویسید :</h5>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
    name: "Photo",
    props: ["nth"],
    methods: {
        ...mapActions(["fetchPicUrl"]),
        
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
        width: 600px;
        height: 600px;
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
</style>