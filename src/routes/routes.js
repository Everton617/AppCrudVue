import PessoaList from '../components/PessoaList.vue';
import AddPessoa from '../components/AddPessoa.vue';
import EditPessoa from '../components/EditPessoa.vue';
import VeiculoList from '../components/VeiculoList.vue'
import AddVeiculo from '../components/AddVeiculo.vue';
import EditVeiculo from '../components/EditVeiculo.vue';
import RevisaoList from '../components/RevisaoList.vue';
import AddRevisao from '../components/AddRevisao.vue';
import EditRevisao from '../components/EditRevisao.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes =[
    {
        name:'PessoaList',
        path: '/',
        component: PessoaList
    },
    {
        name:'AddPessoa',
        path: '/add_pessoa',
        component: AddPessoa
    },
    {
        name:'EditPessoa',
        path: '/pessoa/edit:id?',
        component: EditPessoa
    },
    {
        name:'VeiculoList',
        path: '/veiculo',
        component: VeiculoList
    },
    {
        name:'AddVeiculo',
        path: '/add_veiculo',
        component: AddVeiculo
    },
    {
        name:'EditVeiculo',
        path: '/veiculo/edit:id?',
        component: EditVeiculo
    },
    {
        name:'RevisaoList',
        path: '/revisao',
        component: RevisaoList
    },
    {
        name:'AddRevisao',
        path: '/add_revisao',
        component: AddRevisao
    },
    {
        name:'EditRevisao',
        path: '/revisao/edit:id?',
        component: EditRevisao
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;