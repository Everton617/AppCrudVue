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

                <form @submit.prevent="saveVeiculo" novalidate>
                    <fieldset>
                        <div class="form-group">
                            <label class="form-label mt-4">Id do Proprietário</label>
                            <input type="text" class="form-control" v-model="veiculo.pessoa_id" placeholder="Insira o Id do Proprietário ">
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Marca</label>
                            <input type="text" class="form-control" v-model="veiculo.marca" placeholder="Insira a Marca">
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Modelo</label>
                            <input type="email" class="form-control" v-model="veiculo.modelo" placeholder="Insira o Modelo">
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Placa</label>
                            <input type="email" class="form-control" v-model="veiculo.placa" placeholder="Insira a placa">
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
    name: 'AddVeiculo',
    data() {
        return {
            veiculo: {
                pessoa_id: '',
                marca: '',
                modelo: '',
                placa: ''
            },
            errors: []
        }
    },
    methods: {
        async saveVeiculo() {
        this.errors = [];
        if (!this.veiculo.pessoa_id) {
            this.errors.push("Por favor insira o ID do proprietário");
        }
        if (!this.veiculo.marca) {
            this.errors.push("Por favor insira a marca");
        }
        if (!this.veiculo.modelo) {
            this.errors.push("Por favor insira o modelo");
        }
        if (!this.veiculo.placa) {
            this.errors.push("Por favor insira a placa");
        }
        if (!this.errors.length) {
            let formData = new FormData();
            formData.append('pessoa_id', this.veiculo.pessoa_id);
            formData.append('marca', this.veiculo.marca);
            formData.append('modelo', this.veiculo.modelo);
            formData.append('placa', this.veiculo.placa);
            let url = 'http://127.0.0.1:8000/api/save_veiculo';
            try {
                let response = await axios.post(url, formData);
                console.log(response);
                if (response.status === 200) {
                    this.veiculo.pessoa_id = '';
                    this.veiculo.marca = '';
                    this.veiculo.modelo = '';
                    this.veiculo.placa = '';
                    alert(response.data.message);
                } else{
                    console.log('erro!')
                }
            } catch (error) {
                if (error.response && error.response.status === 422) {
                    this.errors.push("Id do Prorpietário Inexistente!");
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
