<template>
    <div class="container center">
        <h2 class="gallery-header">گالری</h2>
        <card />
    </div>
</template>

<script>
import card from "@/components/card.vue";
export default {
    name: "Gallery",
    components: {
        card
    }
}
</script>
<style scoped>
    .gallery-header{
        padding: 20px !important;
    }
</style>