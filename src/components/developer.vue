<template>    
    <div class="developer">
        <div class="cards" v-for="developer in developers" :key="developer.id">
            <img :src=pathCom(developer.developerImg) alt="pic">
            <h5>{{developer.title}}</h5>
            <p>{{developer.info}}</p>
        </div>
    </div>
</template>


<script>
import {mapGetters, mapActions} from "vuex";
export default {
    name: "developer",
    methods: {
        ...mapActions(["fetchDeveloper"]),
        pathCom: function(url){
            console.log("developer: url = ",url)
            if(process.env.BACKEND_BASE_URL){
                url = process.env.BACKEND_BASE_URL+url;
            }
            return url
        }
    },
    computed: {
        ...mapGetters(["developers"])
    },
    created(){
        this.fetchDeveloper();
    }
}
</script>


<style scoped>   
    .cards {
        border: 1px rgba(0, 0, 0, 0.1) solid;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
        margin: 30px 10px;
        padding: 5px 15px;
        border-radius: 10px;
        text-align: right;
    }
    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: 5px;
    }
    p{
        margin-right: 20px;
        margin-bottom: 20px;
    }
    h5 {
        margin-right: 20px !important;
    }
    @media (max-width:800px){
        .cards {
            text-align: center;
        }
        p, h5{
           margin: 5px; 
        }
    }
</style>