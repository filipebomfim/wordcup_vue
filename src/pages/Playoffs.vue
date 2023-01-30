<!-- 
    Author: Filipe Bomfim Santos Furtado
    File: Playoffs.vue
    Description: 
        Página com as informações sobre a fase de Playoffs do torneio.
 -->

<template>
    <!-- Carregamento do componente para o título da página -->
    <PageTitleComponent :title="'Mata-mata'"></PageTitleComponent>
        <div class="container-fluid page-content mx-auto">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-md-6">
                    <!-- Carregamento do componente Card, para mostrar as partidas dos Playoffs do torneio -->
                    <CardComponent>
                        <!-- Carregamento do conteúdo no slot content, para organizar as partidas -->
                        <template v-slot:content>
                            <!-- Carregamento do componente Matches para listagem do histórico de jogos -->
                            <MatchesComponent :matches="matches"></MatchesComponent>
                        </template>                        
                    </CardComponent>
                </div>                
            </div>
        </div>
</template>

<script>
    /** Importações dos componentes utilizados e da api para buscar os dados*/
    import CardComponent from '@/components/CardComponent'
    import MatchesComponent from '@/components/MatchesComponent'
    import PageTitleComponent from '@/components/PageTitleComponent'
    import api from '@/services/api.js'

    export default {
        /** Nome do Componente */
        name:'Playoffs',
        /** Nome dos Componentes importados a serem utilizados */
        components:{
            CardComponent,
            MatchesComponent,
            PageTitleComponent
        },
        /** Variáveis do projeto */
        data(){
            return{
                matches:[] /** Armazena as partidas carregadas pela api */
            }
        },
        mounted(){
            /** Vai no endpoint para pegar os dados das partidas do torneio que não são da fase de grupos */
            api.get('/matches',{params:{
                                 stage:'LAST_16,QUARTER_FINALS,SEMI_FINALS,FINAL'
                            }}).then(response =>{
            this.matches = response.data.matches;
            })          
        }

    }
</script>

<style scoped>

</style>