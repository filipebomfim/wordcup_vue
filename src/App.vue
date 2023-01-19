<template>
  <div id="app">
    <NavComponent/>
    <router-view path="$router.key"></router-view>
    <FooterComponent/>
  </div>
</template>

<script>
  import './styles/style.css'
  import NavComponent from './components/NavComponent'
  import FooterComponent from './components/FooterComponent'

  export default {
    name: 'App',
    components: {
      NavComponent,FooterComponent
    }
}
</script>

