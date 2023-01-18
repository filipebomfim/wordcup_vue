<template>
  <div id="app" class="container">
    <h1>World Cup 2022</h1>
    <img src="../src/assets/img/logo.png" alt="">
  </div>
</template>

<script>
  import './styles/style.css'
  import api from '@/services/api.js'

  export default {
    name: 'App',
    data(){
      return{
        competitions:[]
      }
    },
    mounted(){
      api.get('/standings').then(response =>{
                this.competitions = response.data
                console.log(this.competitions.standings)
            })
    },
    components: {
      
    }
}
</script>

