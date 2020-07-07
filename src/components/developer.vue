<template>    
    <div class="cards">
        <img src="" alt="pic">
        <h5>{{devName}}</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, dolorum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, incidunt. Lorem, ipsum dolor.</p>
    </div>
</template>


<script>
export default {
    name: "developer",
    data(){
        return{
            devName: "lorem1"
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
</style>