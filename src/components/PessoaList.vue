<template>
    <div class="container">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Idade</th>
            <th scope="col">Email</th>
            <th scope="col">Gênero</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
  
        <tbody v-for="pessoa in pessoas" :key="pessoa.id">
          <tr class="table-secondary">
            <th scope="row">{{ pessoa.id }}</th>
            <th scope="row">{{ pessoa.nome }}</th>
            <th scope="row">{{ pessoa.idade }}</th>
            <th scope="row">{{ pessoa.email }}</th>
            <th scope="row">{{ pessoa.genero }}</th>
            <th scope="row"><button class="btn btn-danger btn-sm" @click.prevent="deletePessoa(pessoa.id)">Deletar</button></th>
            <th scope="row">
            <router-link :to="{ name:'EditPessoa', params:{ id: pessoa.id} }" class="btn btn-primary btn-sm" 
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
    name: 'PessoaList',
    data(){
        return{
        pessoas:Array,

            };
        },
        created(){
            this.getPessoas();
        },
        methods:{
            async getPessoas(){
                let url ='http://127.0.0.1:8000/api/pessoas'
                await axios.get(url).then(response =>{
                    this.pessoas= response.data.pessoas;
                    console.log(this.pessoas);
                }).catch(error => {
                    console.log(error);
                });
            },
            async deletePessoa(id){
            let url = `http://127.0.0.1:8000/api/delete_pessoa/${id}`;
            await axios.delete(url).then(response => {
                if(response.data.code == 200){
                    alert(response.data.message);
                    this.getPessoas()
                }
            }).catch(error => {
                console.log(error);
            })
        },
            
        },
       
        mounted(){
            console.log('Componente lista de pessoas montado ')
        }
    }

</script>