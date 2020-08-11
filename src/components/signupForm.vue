<template>
    <form class="indigo">
        <h5 id="title">فرم ثبت نام</h5>
        <div class="input-field" id="username">
              <input placeholder="نام کاربری" v-model="username" name="username" type="text">
          </div>
          <div class="input-field" id="password">
            <input placeholder="رمز عبور" type="password" v-model="password" name="password" class="validate">
        </div>
        <p>
            <input type="checkbox" id="remember"/>
        </p>
        <p v-if="userError">{{userError}}</p>
        <a @click="registerClicked" class="waves-effect waves-light btn btn-large" id="loginbtn">ثبت نام</a>
    </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "signupForm",
    data() {
        return{
            username: "",
            password: "",
        }
    },
    methods:{
        ...mapActions(["register"]),
        registerClicked: function(){
            if(this.username && this.password){
                localStorage.removeItem('not-validate');
                let usrobj = this.username;
                let passubj = this.password;
                let userFields = {
                    username: usrobj,
                    password: passubj
                }
                this.register(userFields);
                this.$router.push("login");
            }else{
                location.reload();
            }
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
    .not-validate {
        color: rgb(255, 121, 121);
    }
</style>