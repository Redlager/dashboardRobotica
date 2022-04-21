<template>
    <v-container fluid class="pa-0">
        <v-container>
           <id id="app">
           <h1>Probando grafico</h1>
              <chart ref="inscriptoschart" :etiquetas='etiquetas' :series='series'></chart>
           </id>
        </v-container>
    </v-container>
</template>

<script>
import axios from '../axios/axios.js';
import chart from '../components/chart.vue';
export default {
  data() {
    return {
      info: null,
      etiquetas: ['TrendKids','TecnoKids','MakerJuniors','TeensMaker','TeamInn','HighMaker'],


    };
  },
  components: { chart},

  mounted() {
    axios
      .get('https://c3po.roboticamisiones.com/json/evaluacion_estudiantes?_format=json')
      //.get(axios.defaults.baseURL+'json/evaluacion_estudiantes?_format=json')
      .then(response => (this.info = response))
  },
  
  methtods: {
    //logica de negocio
    async getData(){
      
    }
  },

  computed: { //sirve para notificar cambios en variables.
    series(){
      return [10,67,34,56,99,22];

    }
  },

  watch: { //funcion observable
    menux(antes,ahora){
        console.log(antes,ahora);
        if(antes != this.menuinicial){
          this.cambio = true;
        }
      }
  }
};
</script>
