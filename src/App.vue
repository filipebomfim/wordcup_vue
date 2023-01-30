<!-- 
    Author: Filipe Bomfim Santos Furtado
    File: App.vue
    Description: 
        Arquivo principal do Vue para o site
 -->

<template>
  <div id="app">
    <!-- Configuração da exibição das páginas do site, contendo inicialmente a Navbar, a página de acordo com o router e o footer -->
    <NavComponent/>
    <router-view path="$router.key"></router-view>
    <FooterComponent/>
  </div>
</template>

<script>
  /** Importações necessárias da folha de estilo e dos componentes da Navbar e do Footer */
  import './styles/style.css'
  import NavComponent from './components/NavComponent'
  import FooterComponent from './components/FooterComponent'

  export default {
    /** Nome do Componente */
    name: 'App',
    /** Nome dos Componentes importados a serem utilizados */
    components: {
      NavComponent,
      FooterComponent
    }
}
</script>

