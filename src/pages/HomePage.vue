<template>
    <v-container fluid class="pa-0">
        <v-container>
           <id id="app">
           <h1>Probando datos JSON</h1>
            {{ info }}
           </id>
        </v-container>
    </v-container>
</template>

<script>
import axios from '../axios/axios.js';
export default {
  data() {
    return {
      info: null,
    };
  },

  mounted() {
    console.log(axios.defaults.baseURL+'json/evaluacion_estudiantes?_format=json');
    axios
      //.get('https://c3po.roboticamisiones.com/json/evaluacion_estudiantes?_format=json')
      .get(axios.defaults.baseURL+'json/evaluacion_estudiantes?_format=json')
      .then(response => (this.info = response))
  },
};
</script>
