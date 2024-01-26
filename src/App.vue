<template>
  <div>
    <AppHeader title="Teste Crud Laravel"/>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader
  },
  data() {
    return {
      connection: null
    };
  },
  created() {
    console.log("Starting connection to WebSocket Server");
    this.connection = new WebSocket("wss://53d2-2804-3b38-3b41-b10-a1ab-dbb7-f0ac-f33b.ngrok-free.app");

    this.connection.onmessage = function(event) {
      console.log(event);
    };

    this.connection.onopen = function(event) {
      console.log(event);
      console.log("Successfully connected to the echo websocket server...");
    };
  }
}
</script>

<style>

</style>
