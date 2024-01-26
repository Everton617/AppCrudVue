<template>
    <nav class="navbar navbar-expand-lg " data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{{ title }}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link" href="#">Lista de Proprietários
            <span class="visually-hidden">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add_pessoa" class="nav-link" href="#">Adicionar Propietário</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/veiculo" class="nav-link" href="#">Lista de Veículos</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add_veiculo" class="nav-link" href="#">Adicionar Veículos</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/revisao" class="nav-link" href="#">Lista de Revisões</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add_revisao" class="nav-link" href="#">Adicionar Revisão</router-link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</template>

<script>
    import '../assets/css/Appheader.css';
    export default {
      name: 'AppHeader',
      props:{
        title: String
      }
    }
</script>