<template>
  <div id="app">
    <NavComponent/>
    <Home/>
    <FooterComponent/>
  </div>
</template>

<script>
  import './styles/style.css'
  import api from '@/services/api.js'
  import NavComponent from './components/NavComponent'
  import FooterComponent from './components/FooterComponent'
  import Home from './pages/Home'

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
      NavComponent,FooterComponent,Home
    }
}
</script>

