<template>
    <div class="container center">
        <h2 class="gallery-header">گالری</h2>
        <card />
        <a href="/addphoto" class="waves-effect waves-light btn btn-large" id="addPhoto">افزودن تصویر</a>
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
    #addPhoto {
        margin: 20px 0;
    }
</style>