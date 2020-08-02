<template>
    <div>
        <h5>افزودن عکس</h5>
        <form class="card">
            <div class="input-fieldd">
                <label for="user">نام کاربری</label>
                <input id="user" type="text">
            </div>
            <label for="photo">عکس را انتخاب کنید</label>
            <input id="photo" class="file" type="file">
            <a class="waves-effect waves-light btn btn-large" id="submitPhoto">ارسال</a>
        </form>
    </div>
</template>


<script>
export default {
    name: "addPhoto"
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
</style>