<template>
    <div>
        <header-app/>
        <div class="box">
            <form class="signin" @submit.prevent="login()">
                <h2 class="title">Entre com suas credenciais</h2>

                <label class="login_label" for="email_in">Email </label>
                <input v-model="loginForm.email" required class="login_input" id="email_in" type="email">

                <label class="login_label" for="pass_in">Senha </label>
                <input v-model="loginForm.password" required class="login_input" id="pass_in" type="password">

                <p class="error_message" v-show="errMessageIn">{{ errMessageIn }}</p>

                <button type="submit" class="login_button">Entre</button>

            </form>

            <form class="signup" @submit.prevent="signup()">
                <h2 class="title">Cadastre-se, é rápido!</h2>
                <label class="login_label" for="username_in">Username </label>
                <input v-model="registerForm.username" required class="login_input" id="username_up" type="text">

                <label class="login_label" for="email_up">Email </label>
                <input v-model="registerForm.email" required class="login_input" id="email_up" type="email">

                <div class="passwords">
                    <label class="login_label" for="pass_up">Crie sua senha </label>
                    <input v-model="registerForm.password" required class="login_input" id="pass_up" type="password">

                    <label class="login_label" for="pass_up_confirm">Confirme sua senha </label>
                    <input v-model="registerForm.passwordConfirm" required class="login_input" id="pass_up_confirm" type="password">

                    <p class="error_message" v-show="errMessageUp">{{ errMessageUp }}</p>

                    <button type="submit" class="login_button">Cadastre-se</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import MenuHeader from '../../components/MenuHeader/MenuHeader.vue'
import { mapActions } from 'vuex'


export default {
    data() {
        return {
            loginForm: {
                email: '',
                password: ''
            },
            registerForm: {
                username: '',
                email: '',
                password: '',
                passwordConfirm: ''
            },
            errMessageIn: '',
            errMessageUp: ''
        }
    },
    components: {
        "header-app": MenuHeader
    },
    methods: {
        ...mapActions([
            'doLogin',
            'doSignup',
            'doLogout'
        ]),
        async login() {
            this.doLogin(this.loginForm)
                .then(res => {
                    console.log(res)
                    this.errMessageIn = ''
                    this.$router.push({ name: 'home' })
                })
                .catch(err => {
                    if(err.message == 401) this.errMessageIn = 'Credenciais incorretas'
                    else if(err.message == 500) this.errMessageIn = 'Tivemos um problema no servidor, contate o administrador'
                    else this.errMessageIn = `Ouve um problema`
                })
        },
        async signup() {
            await this.doSignup(this.registerForm)
                .then(() => {
                    this.errMessageUp = ''

                    this.$router.push({ name: 'home' })
                })
                .catch(err => {
                    console.error(err)
                    if(err.message == 500) this.errMessageUp = 'Usuario já está cadastrado'

                })
        }
    }
}
</script>

<style scoped>
    .box{
        display: flex;
        justify-content: space-around;
        background-color: #ccc;
        padding: 3em 5em;
        height: 90vh;
    }
    .signin, .signup{
        display: block;
        background-color: #e1e1e1;
        width: 40%;
        height: 50%;
        padding: 2em 1em;
    }
    .title{
        font-size: 1.6em;
        margin: 0 0 1em 2em;
    }
    .login_label{
        display: block;
        margin-left: 3em;
        margin-bottom: .5em;
        font-size: 1.3em;
    }
    .login_input{
        display: block;
        margin: 0 auto 1.3em auto;
        padding: .2em .5em;
        outline: none;
        font-size: 1.2em;
        width: 75%;
    }
    .login_button{
        display: block;
        padding: .5em 1em;
        width: 30%;
        margin: 0 auto;
        margin-top: 1.5em;
        text-transform: uppercase;
        background-color: #ccc;
        outline: none;
        transition: .4s;
    }
    .login_button:hover{
        cursor: pointer;
        background-color: #bcbcbc;
        transition: .4s;
    }
    .error_message{
        color: red;
        text-align: center;
    }
</style>