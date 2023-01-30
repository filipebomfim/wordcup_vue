<!-- 
    Author: Filipe Bomfim Santos Furtado
    File: WCFifa.vue
    Description: 
        Página com as informações sobre os campeões das copas anteriores.
 -->

<template>
    <div class="page">
        <!-- Carregamento do componente para o título da página -->
        <PageTitleComponent :title="'História da WC FIFA'"></PageTitleComponent>
        <div class="container-fluid page-content mx-auto">
            <div class="search mb-5 d-flex justify-content-center">
                <div class="mx-auto">
                    <!-- Carregamento do input para pesquisa -->
                    <input class="form-control form-control-lg" v-model="search" type="search" placeholder="Pesquisar por Seleção ou Ano...">
                </div>
            </div>
            <div class="row">
                <!-- Caso nenhum dado seja encontrado para ser exibido, exibe a informação -->
                <div v-if="!searchseasons.length" class="no-array d-flex justify-content-center align-items-center mb-3">
                    <p>Nenhuma informação encontrada!</p>
                </div>
                <!-- Para cada Copa encontrada de acordo com o filtro, um componente Card é carregado para listagem das informações -->
                <div v-else class="col-lg-3 col-md-6 col-12 px-0" v-for="(season,index) in searchseasons" :key="index" >
                    <CardComponent :title="getYear(season.startDate)">
                        <!-- Carregamento do conteúdo no slot content do Card, com a listagem das informações pertinentes de cada Copa do Mundo -->
                        <template v-slot:content>
                            <img class="rounded mx-auto d-block mb-3" 
                            :src="require('../assets/img/wc-logos/'+getYear(season.startDate)+'.png')" alt="Logo" width="200" height="200">
                            <div class="champion d-flex justify-content-around align-items-center my-2">
                                <span>
                                    Campeão
                                </span>
                                <div class="d-flex align-items-center mx-2">
                                    <img class="me-2" :src="season.winner.crest" alt="Logo" width="24" height="24">
                                    {{season.winner.name}} 
                                </div>                                  
                            </div>
                            <div class="d-flex justify-content-around">
                                <p>Data de Início</p>
                                <p>{{ season.startDate }}</p>
                            </div>
                            <div class="d-flex justify-content-around">
                                <p>Data de Término</p>
                                <p>{{ season.endDate }}</p>
                            </div>
                        </template>
                    </CardComponent> 
                </div> 
            </div>
        </div>
    </div>
</template>

<script>    
    /** Importações dos componentes utilizados e da api para buscar os dados*/
    import PageTitleComponent from '@/components/PageTitleComponent'
    import CardComponent from '@/components/CardComponent'
    import api from '@/services/api.js'


    export default{
        /** Nome do Componente */
        name: 'WCFifa',
        /** Nome dos Componentes importados a serem utilizados */
        components:{
            PageTitleComponent,
            CardComponent
        },
        /** Variáveis do projeto */
        data(){
            return {
                seasons:[], /** Armazena as informações sobre todas as copas do Mundo carregadas pela api */ 
                searchseasons:[], /** Armazena as informações das copas de acordo com o filtro */
                search:'', /** Armazena a informação sobre o filtro de acordo com o que o usuário informa no input */
            }
        },
        /** Sempre que o valor de search é alterado, é chamada a função para filtrar as copas de acordo com o filtro */
        watch:{
            search(){
                this.searchseasons = this.getSeasons();
            }
        },
        methods:{
            /** Retorna somente o ano a partir de determinada data */
            getYear(date){
                return new Date(date).getFullYear();
            },
            /** As Copas são filtradas a partir do valor informado em search */
            getSeasons(){
                return this.seasons.filter((season)=>{
                    return season.winner.name.includes(this.search) || this.getYear(season.startDate).toString().includes(this.search);
                });
            }
        },
        mounted(){
            /** Vai no endpoint para pegar os dados de todas as Copas do Mundo, as quais já tenham um vencedor informado pela api
                O valor inicial da variável do filtro de copas é o valor de todas as copas
             */
            api.get().then(response =>{
                this.seasons = response.data.seasons;
                this.seasons = this.seasons.filter((season)=>{
                    return season.winner!=null;
                });
                this.searchseasons = this.seasons;
            });
        }
    }
</script>

<style scoped>
    .champion{
        background-color: var(--color-background-2);
        color: var(--color-text-light);
        font-size: 20px;
    }

    p{
        margin-bottom: 5px;
    }

    input{
        width: 350px !important;
    }

    i{
        font-size: 40px;
        position: relative;
        right: 50px;
        color: #5E071F;
    }

    .no-array{
        height: 500px;
        color: var(--color-text-light);
        font-size: var(--font-size-big-text);
    }
</style>