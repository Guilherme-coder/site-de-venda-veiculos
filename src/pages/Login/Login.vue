<template>
    <div>
        <header-app/>
        <div class="box">
            <form class="signin">
                <h2 class="title">Entre com suas credenciais</h2>
                <label class="login_label" for="email_in">Email </label>
                <input class="login_input" id="email_in" type="text">
                
                <label class="login_label" for="pass_in">Senha </label>
                <input class="login_input" id="pass_in" type="password">

                <button class="login_button">Entre</button>
            </form>

            <form class="signup">        
                <h2 class="title">Cadastre-se, é rápido!</h2>        
                <label class="login_label" for="email_up">Email </label>
                <input class="login_input" id="email_up" type="text">
                
                <div class="passwords">
                    <label class="login_label" for="pass_up">Crie sua senha </label>
                    <input class="login_input" id="pass_up" type="text">
                    
                    <label class="login_label" for="pass_up_confirm">Confirme sua senha </label>
                    <input class="login_input" id="pass_up_confirm" type="text">
                    
                    <button class="login_button">Cadastre-se</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import MenuHeader from '../../components/MenuHeader/MenuHeader.vue'


export default {
    components: {
        "header-app": MenuHeader
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

</style>