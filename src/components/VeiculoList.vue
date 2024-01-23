<template>
    <div class="container">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id do Veículo</th>
            <th scope="col">ID Proprietário</th>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Placa</th>
          </tr>
        </thead>
  
        <tbody v-for="veiculo in veiculos" :key="veiculo.id">
          <tr class="table-secondary">
            <th scope="row">{{ veiculo.id }}</th>
            <th scope="row">{{ veiculo.pessoa_id }}</th>
            <th scope="row">{{ veiculo.marca }}</th>
            <th scope="row">{{ veiculo.modelo }}</th>
            <th scope="row">{{ veiculo.placa }}</th>
            <th scope="row"><button class="btn btn-danger btn-sm" @click.prevent="deleteVeiculo(veiculo.id)">Deletar</button></th>
            <th scope="row">
            <router-link :to="{ name:'EditVeiculo', params:{ id: veiculo.id} }" class="btn btn-primary btn-sm" 
                >Editar
            </router-link>
            </th>
        
        </tr>
        </tbody>
      </table>
    </div>
  </template>

<script>
import axios from 'axios';

export default {
    name: 'VeiculoList',
    data(){
        return{
            veiculos:Array,

            };
        },
        created(){
            this.getVeiculos();
        },
        methods:{
            async getVeiculos(){
                let url ='http://127.0.0.1:8000/api/veiculos/'
                await axios.get(url).then(response =>{
                    this.veiculos= response.data.veiculos;
                    console.log(this.veiculos);
                }).catch(error => {
                    console.log(error);
                });
            },
          
            async deleteVeiculo(id){
            let url = `http://127.0.0.1:8000/api/delete_veiculo/${id}`;
            await axios.delete(url).then(response => {
                if(response.data.code == 200){
                    alert(response.data.message);
                    this.getVeiculos()
                }
            }).catch(error => {
                console.log(error);
            })
        },
        },

       
        mounted(){
            console.log('Componente lista de veiculos montado ')
        }
    }

</script>