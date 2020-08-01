<template>
  <section class="slider">
    <signupForm />
  </section>
</template>

<script>
import signupForm from "@/components/signupForm.vue";
export default {
  name: "Signup",
  components: {
    signupForm
  }
};
</script>

<style scoped>
  .slider{
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Citadelle_de_Bam%2C_octobre2013_%2802%29.jpg/1024px-Citadelle_de_Bam%2C_octobre2013_%2802%29.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 687px;
    display: grid;
  }
  @media (max-width: 720px) {
    .slider {
      height: 75vh !important;
    }
  }
</style>
