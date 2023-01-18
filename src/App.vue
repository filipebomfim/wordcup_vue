<template>
  <div id="app">
    <NavComponent/>
    <FooterComponent/>
  </div>
</template>

<script>
  import './styles/style.css'
  import api from '@/services/api.js'
  import NavComponent from './components/NavComponent'
  import FooterComponent from './components/FooterComponent'

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
      NavComponent,FooterComponent
    }
}
</script>

