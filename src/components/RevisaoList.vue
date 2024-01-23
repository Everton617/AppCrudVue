<template>
    <div class="container">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id Revisão</th>
            <th scope="col">ID Veículo</th>
            <th scope="col">Data Revisão Atual</th>
            <th scope="col">Data Revisão Próxima</th>
            <th scope="col">Descrição</th>
          </tr>
        </thead>
  
        <tbody v-for="revisao in revisoes" :key="revisao.id">
          <tr class="table-secondary">
            <th scope="row">{{ revisao.id }}</th>
            <th scope="row">{{ revisao.veiculo_id }}</th>
            <th scope="row">{{ revisao.dt_atual_revisao }}</th>
            <th scope="row">{{ revisao.dt_proxima_revisao }}</th>
            <th scope="row">{{ revisao.descricao }}</th>
            <th scope="row"><button class="btn btn-danger btn-sm" @click.prevent="deleteRevisao(revisao.id)">Deletar</button></th>
            
            <th scope="row">
            <router-link :to="{ name:'EditRevisao', params:{ id: revisao.id} }" class="btn btn-primary btn-sm" 
                >Editar
            </router-link></th>
        </tr>
        </tbody>
      </table>
    </div>
  </template>

<script>
import axios from 'axios';

export default {
    name: 'RevisaoList',
    data(){
        return{
            revisoes:Array,

            };
        },
        created(){
            this.getRevisoes();
        },
        methods:{
            async getRevisoes(){
                let url ='http://127.0.0.1:8000/api/revisoes/'
                await axios.get(url).then(response =>{
                    this.revisoes= response.data.revisoes;
                    console.log(this.revisoes);
                }).catch(error => {
                    console.log(error);
                });
            },
            async deleteRevisao(id){
            let url = `http://127.0.0.1:8000/api/delete_revisao/${id}`;
            await axios.delete(url).then(response => {
                if(response.data.code == 200){
                    alert(response.data.message);
                    this.getRevisoes()
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