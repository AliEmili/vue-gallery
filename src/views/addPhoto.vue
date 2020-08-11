<template>
    <div>
        <h5>افزودن عکس</h5>
        <form id="form" @submit.prevent="submit" class="card">
            <div class="input-fieldd">
                <label for="photoTitle">عنوان</label>
                <input name="title" v-model="title" id="photoTitle" type="text">
            </div>
            <div class="input-fieldd">
                <label for="desText">متن توضیحات</label>
                <input v-model="info" name="info" id="desText" type="text">
            </div>
            <label for="photo">عکس را انتخاب کنید</label>
            <input @input="onSelectFile" ref="inputUpload" accept="image/*" id="photo" class="file" type="file">
            <div v-if="img" class="img-cont">
                <img :src="img" alt="pic">
            </div>
            <button type="submit" class="waves-effect indigo waves-light btn btn-large" id="submitPhoto">ارسال</button>
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
            img: null
        }
    },
    methods: {
        ...mapActions(["addPhotoAction"]),
        submit: function() {
            if(!localStorage.getItem('user')){
                this.$router.push("/login");
            }
            else if(!!this.$refs.inputUpload.files[0] && !!this.info && this.title){
                let image = this.$refs.inputUpload.files[0];
                let formData = new FormData();
                formData.append('info', this.info);
                formData.append('imagePath', image);
                formData.append('title', this.title);
                this.addPhotoAction(formData);
                localStorage.setItem('reloadGallery','1');
                this.$router.push("/gallery");
            }else {
                location.reload();
            }
        },
        onSelectFile: function(){
            const input = this.$refs.inputUpload;
            const files = input.files;
            if( files && files[0]){
                const reader = new FileReader
                reader.onload = e => {
                    this.img = e.target.result;
                }
                reader.readAsDataURL(files[0]);
            }
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
        border-radius: 10px;
    }
</style>