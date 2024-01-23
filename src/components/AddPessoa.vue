<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">

                <div class="alert alert-danger mt-4" v-if="errors.length">
                    <ul class="mb-0">
                        <li v-for="(error, index) in errors" :key="index">
                            {{ error }}
                        </li>
                    </ul>
                </div>

                <form @submit.prevent="savePessoa" novalidate>
                    <fieldset>
                        <div class="form-group">
                            <label class="form-label mt-4">Nome</label>
                            <input type="text" class="form-control" v-model="pessoa.nome" placeholder="Insira o nome">
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Idade</label>
                            <input type="number" class="form-control" v-model="pessoa.idade" placeholder="Insira a idade">
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Email</label>
                            <input type="email" class="form-control" v-model="pessoa.email" placeholder="Insira o email">
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Gênero</label>
                            <select class="form-select" v-model="pessoa.genero">
                                <option>Masculino</option>
                                <option>Feminino</option>
                            </select>
                        </div>
                        <button class="btn btn-primary mt-4">Inserir</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'AddPessoa',
    data() {
        return {
            pessoa: {
                nome: '',
                idade: '',
                email: '',
                genero: ''
            },
            errors: []
        }
    },
    methods: {
        async savePessoa() {
        this.errors = [];
        if (!this.pessoa.nome) {
            this.errors.push("Por favor insira um Nome");
        }
        if (!this.pessoa.idade) {
            this.errors.push("Por favor insira sua idade");
        }
        if (!this.pessoa.email) {
            this.errors.push("Por favor insira seu Email");
        }
        if (!this.pessoa.genero) {
            this.errors.push("Por favor insira seu Gênero");
        }
        if (!this.errors.length) {
            let formData = new FormData();
            formData.append('nome', this.pessoa.nome);
            formData.append('idade', this.pessoa.idade);
            formData.append('email', this.pessoa.email);
            formData.append('genero', this.pessoa.genero);
            let url = 'http://127.0.0.1:8000/api/save_pessoa';
            try {
                let response = await axios.post(url, formData);
                console.log(response);
                if (response.status === 200) {
                    this.pessoa.nome = '';
                    this.pessoa.idade = '';
                    this.pessoa.email = '';
                    this.pessoa.genero = '';
                    alert(response.data.message);
                } else{
                    console.log('erro!')
                }
            } catch (error) {
                this.errors.push(error.response);
            }
        }
    }
    }
}
</script>
