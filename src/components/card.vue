<template>
    <div class="photos">
        <div @click="goToPhotoPage(photo._id)" class="card" v-for="photo in photos" v-bind:key="photo.id">
            <img :src=pathCom(photo.imagePath) alt="pic">
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    name: "card",
    methods: {
        ...mapActions(["fetchPhotos"]),
        goToPhotoPage: function(id){
            console.log("gotophotopage : id =", id)
            this.$router.push(`gallery/${id}`);
        },
        pathCom: function(url){
            console.log("pathcom: url =",url)
            if(process.env.BACKEND_BASE_URL){
                url = process.env.BACKEND_BASE_URL+url;
            }
            return url
        }
    },
    computed: {
        ...mapGetters(["photos"])
    },
    created(){
        this.fetchPhotos();
    },
    mounted(){
        if(localStorage.getItem('reloadGallery')){
            localStorage.removeItem('reloadGallery');
            location.reload();
        }
    }
}
</script>

<style scoped>
    img{
        width: 100%;
        padding: 20px;
        cursor: pointer;
    }
    .card {
        margin: 0;
        border-radius: 10px;
    }
    .card:hover {
        transform: scale(1.05);
    }
    .photos{
        width: 90%;
        margin: 10px auto;
        display: grid;
        grid-template-columns: repeat(7,1fr);
        text-align: center;
        grid-gap: 20px;
    }

    @media(max-width:1000px){
        .photos{
            grid-template-columns:repeat(4,1fr);
        }
    }
    @media(max-width:650px){
        .photos{
            grid-template-columns:repeat(2,1fr);
        }
    }
    @media(max-width:350px){
        .photos{
            grid-template-columns:repeat(1,1fr);
        }
        .card {
            width: 90%;
            margin: auto;
        }
    }
</style>