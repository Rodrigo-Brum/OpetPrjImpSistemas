<template>
    <div class="register">
        <h1 id="title">Cadastro de Usuário</h1>

        <div id="register">
            <b-form>
                <input id="user-id" type="hidden" v-model="user.id" />
                
                <b-row>
                    <b-col md="6" sm="12">
                        <b-form-group label="Nome:" label-for="user-name" class="mt-3 mb-3">
                            <b-form-input id="user-name" type="text"
                                v-model="user.name" required 
                                :readonly="mode === 'remove'"
                                placeholder="Informe o Nome do Usuário..." />
                        </b-form-group>
                    </b-col>
                </b-row>    
                
                <b-row>
                    <b-col md="6" sm="12">
                        <b-form-group label="E-mail:" label-for="user-email" class="mt-3 mb-3">
                            <b-form-input id="user-email" type="text"
                                v-model="user.email" required
                                :readonly="mode === 'remove'"
                                placeholder="Informe o E-mail do Usuário..." />
                        </b-form-group>
                    </b-col>
                </b-row>

                <!--<b-form-checkbox id="course" v-show="mode === 'save'"
                    v-model="user.course" class="mt-3 mb-3">
                    Análise e Desenvolvimento de Sistemas
                </b-form-checkbox>-->

                <b-row v-show="mode === 'save'">
                    <b-col md="6" sm="12">
                        <b-form-group label="Senha:" label-for="user-password" class="mt-3 mb-3">
                            <b-form-input id="user-password" type="password"
                                v-model="user.password" required
                                placeholder="Informe a Senha do Usuário..." />
                        </b-form-group>
                    </b-col>

                    <b-col md="6" sm="12">
                        <b-form-group label="Confirmação de Senha:" label-for="user-confirm-password" class="mt-3 mb-3">
                            <b-form-input id="user-confirm-password" type="password"
                                v-model="user.confirmPassword" required
                                placeholder="Confirme a Senha do Usuário..." />
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row v-show="mode === 'save'">
                    <b-col md="6" sm="12">
                        <b-form-group label="Ano:" label-for="user-ano" class="mt-3 mb-3">
                            <b-form-input id="user-ano" type="number"
                                v-model="user.ano" required
                                placeholder="Informe o ano de inicio..." />
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col xs="12">
                        <b-button variant="primary" v-if="mode === 'save'"
                            @click="save">Salvar</b-button>
                        <b-button class="ml-2" @click="reset">Cancelar</b-button>
                    </b-col>
                </b-row>
            </b-form>
        </div>
    </div>
</template>

<script >
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'

export default {
    name: 'Register',
    data: function() {
        return {
            mode: 'save',
            user:{}
        }
    },

    methods: {
        reset() {
            this.mode = 'save'      //retorna ao estado incial, modo save
            this.user = {}          //sera o usuario
            this.$router.push({ path: '/' })
        },

        save() {
            axios.post(`${baseApiUrl}/users`, this.user)            //faz a requisição ao backend
                .then(() => {                                       //caso for sucesso
                    this.$toasted.global.defaultSuccess()           //exibe a mensagem
                    this.reset()                                    //e volta ao estado incial, modo save
                }).catch(showError)                                 //caso contrário, exibe o erro
        }
    }
}
</script>

<style scoped>
    #title {
        text-align: center;
        font-size: 1.2em;
        background: linear-gradient(to right, #1e469a, #49a7c1);
        padding: 10px;
        color: #FFF;
        margin-bottom: 20px;
    }

    #register {
        margin: 20px;
        align-items: center;
    }

    .register {
        background: #eeffff;
        height:  100vh;
    }
</style>