<template>
    <div class="container center">
        <h2 class="gallery-header">گالری</h2>
        <label>(برای مشاهده جزئیات روی عکس کلیک کنید)</label>
        <card />
        <router-link to="/addphoto" class="waves-effect waves-light btn btn-large" id="addPhoto">افزودن تصویر</router-link>
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