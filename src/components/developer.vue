<template>    
    <div class="developer">
        <div class="cards" v-for="developer in developers" :key="developer.id">
            <img :src=developer.url alt="pic">
            <h5>{{developer.title | substring}}</h5>
            <p>{{developer.title | repeat}}</p>
        </div>
    </div>
</template>


<script>
import {mapGetters, mapActions} from "vuex";
export default {
    name: "developer",
    methods: {
        ...mapActions(["fetchDeveloper"])
    },
    computed: {
        ...mapGetters(["developers"])
    },
    created(){
        this.fetchDeveloper();
    },
    filters: {
        substring(val){
            return val.substring(0,3);
        },
        repeat(val){
            return val.repeat(10);
        }
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
    h5, p{
        margin-right: 20px;
        margin-bottom: 20px;
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