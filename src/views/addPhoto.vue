<template>
    <div>
        <h5>افزودن عکس</h5>
        <form class="card">
            <div class="input-fieldd">
                <label for="photoTitle">عنوان</label>
                <input v-model="title" id="photoTitle" type="text">
            </div>
            <div class="input-fieldd">
                <label for="desText">متن توضیحات</label>
                <input v-model="info" id="desText" type="text">
            </div>
            <label for="photo">عکس را انتخاب کنید</label>
            <input ref="inputUpload" @change="uploadImage" accept="image/*" id="photo" class="file" type="file">
            <div v-if="img" class="img-cont">
                <img :src="img" alt="pic">
            </div>
            <a @click="photoSent" class="waves-effect waves-light btn btn-large" id="submitPhoto">ارسال</a>
        </form>
    </div>
</template>


<script>
import { mapActions } from 'vuex';
export default {
    name: "addPhoto",
    data(){
        return {
            title: "",
            info: "",
            img: ""
        }
    },
    methods: {
        ...mapActions(["addPhotoAction"]),
        // e dasht input function
        uploadImage:function(){
            let image = this.$refs.inputUpload.files[0].name;
            this.img = image;
            // const image = e.target.files[0];
            // const reader = new FileReader();
            // this.img = image;
            // reader.readAsDataURL(image);
            // reader.onload = e => {
            //     this.img = e.target.result;
            // }
        },
        photoSent: function(){
            let newTitle = this.title;
            let newInfo = this.info;
            let newFile = this.img;
            let photo = {
                title: newTitle,
                imagePath: newFile,
                info: newInfo
            }
            this.addPhotoAction(photo);
        }
    }
}
</script>

<style scoped>
    h5 {
        text-align: center;
        margin: 20px !important;
    }
    form {
        width: 80% !important;
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-items: center;
    }
    .file {
        width: 100%;
        direction: ltr !important;
        margin-bottom: 10px;
    }
    input,
    input::placeholder {
        padding: 10px;
    }
    label {
        padding: 5px;
    }
    .img-cont{
        width: 200px;
        margin: 30px auto;
    }
    img {
        width: 100%;
        height: auto;
    }
</style>