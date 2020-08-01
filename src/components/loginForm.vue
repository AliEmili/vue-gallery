<template>
    <form class="teal">
        <h5 id="title">ورود</h5>
        <div class="input-field" id="username">
              <input placeholder="نام کاربری" type="text" class="validate">
          </div>
          <div class="input-field" id="password">
            <input placeholder="رمز عبور" type="password" class="validate">
        </div>
        <p>
            <input type="checkbox" id="remember"/>
        </p>
        <a class="waves-effect waves-light btn btn-large" id="loginbtn">ورود</a>
    </form>
</template>

<script>
export default {
    name: "loginForm"
}
</script>

<style scoped>
    form {
        padding: 20px;
        width: 80%;
        margin: auto;
    }
    input::placeholder {
        color:white;
        opacity: 0.6;
    }
    h5 {
        text-align: center;
        font-weight: bolder;
        color: white;
        opacity: 0.9;
    }
</style>