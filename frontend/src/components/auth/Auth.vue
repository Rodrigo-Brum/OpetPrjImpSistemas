<template>
    <div class="auth-content">
        <div class="auth-modal">
            <img src="@/assets/icon_login.svg" width="100" alt="Logo" />
            <hr>

            <div class="auth-title">Cadastro</div>
            <input v-model="user.email" name="email" type="text" placeholder="E-mail">
            <input v-model="user.password" name="password" type="password" placeholder="Senha">
            <button @click="signin">Entrar</button>

            <a href="/register">
                <span>Não tem cadastro? Registre-se aqui!</span>
            </a>
        </div>
    </div>
</template>

<script>
import { baseApiUrl, showError} from '@/global'
import axios from 'axios'

export default {
    name: 'Auth',
    data: function() {
        return {
            user: {}
        }
    },
    methods: {
        signin() {
            axios.post(`${baseApiUrl}/signin`, this.user)
                .then(res => {
                    this.$router.push({ path: '/auth' })
                })
                .catch(showError)
        }
    }
}
</script>

<style>
    .auth-content {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .auth-modal {
        background-color: rgba(255, 255, 255);
        width: 350px;
        padding: 35px;
        padding-top: 0px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .auth-title {
        font-size: 1.2rem;
        font-weight: 100;
        margin-top: 10px;
        margin-bottom: 15px;
    }

    .auth-modal input {
        border: 1px solid #BBB;
        width: 100%;
        margin-bottom: 15px;
        padding: 3px 8px;
        outline-color:aqua;
    }

    .auth-modal button {
        align-self: flex-end;
        background-color: #2460ae;
        color: #FFF;
        padding: 5px 15px;
    }

    .auth-modal a {
        margin-top: 35px;
    }

    .auth-modal hr {
        border: 0;
        width: 100%;
        height: 1px;
        background-image: linear-gradient(to right,
            rgba(120, 120, 120, 0),
            rgba(120, 120, 120, 0.75),
            rgba(120, 120, 120, 0));
    }
</style>
