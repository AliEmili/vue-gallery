<template>
    <form class="indigo">
        <h5 id="title">ورود</h5>
        <div class="input-field" id="username">
              <input v-model="username" placeholder="نام کاربری" type="text" class="validate">
          </div>
          <div class="input-field" id="password">
            <input v-model="password" placeholder="رمز عبور" type="password" class="validate">
        </div>
        <a @click="loginClicked" class="waves-effect waves-light btn btn-large" id="loginbtn">ورود</a>
    </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "loginForm",
    data(){
        return{
            username: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['login']),
        loginClicked: function(){
            let usrobj = this.username;
            let passobj = this.password;
            let userobj = {
                username:usrobj,
                password:passobj
            }
            this.login(userobj);
        }
    }
}
</script>

<style scoped>
    form {
        padding: 20px;
        width: 30%;
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
    a:hover {
        transform: scale(1.1);
    }
</style>