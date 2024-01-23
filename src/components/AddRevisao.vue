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

                <form @submit.prevent="saveRevisao" novalidate>
                    <fieldset>
                        <div class="form-group">
                            <label class="form-label mt-4">Id do Veículo</label>
                            <input type="number" class="form-control" v-model="revisao.veiculo_id" placeholder="Insira o Id do Veículo ">
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Data da revisão atual</label>
                            <input type="date" class="form-control" v-model="revisao.dt_atual_revisao" placeholder="Insira a Data da revisão atual">
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Data da próxima atual</label>
                            <input type="date" class="form-control" v-model="revisao.dt_proxima_revisao" placeholder="Insira a Data da próxima atual">
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Descrição</label>
                            <input type="text" class="form-control" v-model="revisao.descricao" placeholder="Insira a Descrição">

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
    name: 'AddRevisao',
    data() {
        return {
            revisao: {
                veiculo_id: '',
                dt_atual_revisao: '',
                dt_proxima_revisao: '',
                descricao: ''
            },
            errors: []
        }
    },
    methods: {
        async saveRevisao() {
        this.errors = [];
        if (!this.revisao.veiculo_id) {
            this.errors.push("Por favor insira o ID do proprietário");
        }
        if (!this.revisao.dt_atual_revisao) {
            this.errors.push("Por favor insira a data da atual revisão");
        }
        if (!this.revisao.dt_proxima_revisao) {
            this.errors.push("Por favor insira a data da próxima revisão");
        }
        if (!this.revisao.descricao) {
            this.errors.push("Por favor insira a descrição");
        }
        if (!this.errors.length) {
            let formData = new FormData();
            formData.append('veiculo_id', this.revisao.veiculo_id);
            formData.append('dt_atual_revisao', this.revisao.dt_atual_revisao);
            formData.append('dt_proxima_revisao', this.revisao.dt_proxima_revisao);
            formData.append('descricao', this.revisao.descricao);
            let url = 'http://127.0.0.1:8000/api/save_revisao';
            try {
                let response = await axios.post(url, formData);
                console.log(response);
                if (response.status === 200) {
                    this.revisao.veiculo_id = '';
                    this.revisao.dt_atual_revisao = '';
                    this.revisao.dt_proxima_revisao = '';
                    this.revisao.decricao = '';
                    alert(response.data.message);
                } else{
                    console.log('erro!')
                }
            } catch (error) {
                if (error.response && error.response.status === 422) {
                    this.errors.push("Id do Veículo Inexistente!");
                alert(error.response.data.message);
            } else {
                this.errors.push(error.response);
            };
            }
        }
    }
    }
}
</script>
