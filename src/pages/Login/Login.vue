<template>
    <div>
        <header-app/>
        <div class="box">
            <form class="signin" @submit.prevent="signin()">
                <h2 class="title">Entre com suas credenciais</h2>
                <label class="login_label" for="email_in">Email </label>
                <input required class="login_input" id="email_in" type="email">
                
                <label class="login_label" for="pass_in">Senha </label>
                <input required class="login_input" id="pass_in" type="password">

                <p class="error_message" v-show="errMessageIn">Os dados estão incorretos, tente novamente.</p>

                <button type="submit" class="login_button">Entre</button>

            </form>

            <form class="signup" @submit.prevent="signup()">        
                <h2 class="title">Cadastre-se, é rápido!</h2>        
                <label class="login_label" for="email_up">Email </label>
                <input required class="login_input" id="email_up" type="email">
                
                <div class="passwords">
                    <label class="login_label" for="pass_up">Crie sua senha </label>
                    <input required class="login_input" id="pass_up" type="password">
                    
                    <label class="login_label" for="pass_up_confirm">Confirme sua senha </label>
                    <input required class="login_input" id="pass_up_confirm" type="password">
                    
                    <p class="error_message" v-show="errMessageUp">{{ errMessageUp }}</p>
                    
                    <button type="submit" class="login_button">Cadastre-se</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import MenuHeader from '../../components/MenuHeader/MenuHeader.vue'


export default {
    data() {
        return {
            errMessageIn: false,
            errMessageUp: '',
            emailExists: ''
        }
    },
    components: {
        "header-app": MenuHeader
    },
    methods: {
        signin() {
            const email = document.getElementById('email_in').value
            const password = document.getElementById('pass_in').value
            this.$http.post('http://localhost:3000/api/users/credentials/', { email: email, password: password })
                .then((results) => {
                    if(results.body.length == 0){
                        this.errMessageIn = true
                    } else {
                        this.errMessageIn = false
                        console.log('login feito com sucesso')
                        localStorage.setItem('email', email)
                        this.$router.push('/')
                    }

                })
                .catch(err => console.log(`ERRO: ${err.message}`))
        },
        signup() {
            const email = document.getElementById('email_up').value
            const pass = document.getElementById('pass_up').value
            const passConfirm = document.getElementById('pass_up_confirm').value
            
            if(pass !== passConfirm){
                this.errMessageUp = 'as senhas não coincidem!'
                return
            }

            this.$http.post('http://localhost:3000/api/users/email/', { email: email })
                .then(res => this.emailExists = res.body)
                .catch(err => console.log(`ERRO: ${err.message}`))

            if(this.emailExists.length){
                console.log('não liberado')
                this.errMessageUp = 'o email já está cadastrado!'
                return
            }

            this.errMessageUp = ''

            this.$http.post('http://localhost:3000/api/users/', { email: email, password: pass })
                .then(() => {
                    console.log('cadastro feito com sucesso')
                    localStorage.setItem('email', email)
                    this.$router.push('/')
                })
                .catch(err => console.log(`ERRO: ${err.message}`))
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