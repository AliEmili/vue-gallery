<template>
  <div class="about">
    <h2>{{headTitle}}</h2>
    <p>{{paragraph}}</p>
    <div class="developer">
      <developer/>
      <developer/>
    </div>
  </div>
</template>




<script>
import developer from "@/components/developer";
import axios from 'axios';
export default {
  name: "About",
  data(){
    return{
      headTitle: "",
      paragraph: ""
    }
  },
  components: {
    developer
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(res=> {
      this.headTitle = res.data[0].title.substring(0,6);
      this.paragraph = res.data[0].title;
    })
    .catch(err => console.log(err));
  }
}
</script>



<style scoped>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .about {
    width: 80%;
    margin: auto;
    text-align: center;
  }
  .developer{
    display: block;
  }
  h2{
    margin: 20px 0;
  }
  p{
    margin: 40px 0;
  }

  @media(max-width:920px){
    .developer > *{
      margin-bottom: 20px;
    }
  }
</style>