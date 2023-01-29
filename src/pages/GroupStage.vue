<!-- 
    Author: Filipe Bomfim Santos Furtado
    File: GroupStage.vue
    Description: 
        Página com as informações sobre a fase de grupos do torneio.
 -->

<template>
    <div class="page">
        <!-- Carregamento do componente para o título da página -->
        <PageTitleComponent :title="'Group Stage'"></PageTitleComponent>
        <div class="container-fluid page-content mx-auto">
            <div class="row">
                <!-- Para cada grupo do torneio, um componente Card é carregado para listagem das informações -->
                <div class="col-xl-3 col-md-6 col-12 px-0" v-for="(group,index) in groups" :key="index" >
                    <CardComponent :title="group.group.replace('_',' ')" >
                        <!-- Carregamento do conteúdo no slot header, para chamada do Modal que mostra as partidas do grupo -->
                        <template v-slot:header>
                            <!-- Link para cada grupo. Ao ser clicado, um novo grupo é selecionado. -->
                            <a href="#" v-on:click="setGroupMatches(group.group)" data-bs-toggle="modal" data-bs-target="#modal"><i class="bi bi-calendar2-range"></i></a>
                        </template>
                        <!-- Carregamento do conteúdo no slot content do Card, com a listagem das informações do grupo
                            Para cada grupo, é carregado um componente de Tabela para organizar as informações necessárias
                            O slot de content da tabela é chamado, passando os dados do grupo a serem mostrados e as chaves
                        -->
                        <template v-slot:content>
                            <TableComponent :columns="tableColumns" :data="group.table" :keys="keys"></TableComponent>
                        </template>
                    </CardComponent> 
                </div> 

                <!-- Carregamento do componente de Modal, para mostrar as partidas do grupo selecionado -->
                <ModalComponent :title="'Matches from '+groupMatchName.replace('_',' ')">
                    <!-- Carregamento do conteúdo no slot content, para organizar as partidas do grupo selecionado -->
                    <template v-slot:content>
                        <MatchesComponent :matches="groupMatches"></MatchesComponent>
                    </template>
                </ModalComponent>
            </div>
        </div>
    </div>
</template>

<script>
    /** Importações dos componentes utilizados e da api para buscar os dados*/
    import PageTitleComponent from '@/components/PageTitleComponent'
    import CardComponent from '@/components/CardComponent'
    import TableComponent from '@/components/TableComponent'
    import ModalComponent from '@/components/ModalComponent'
    import MatchesComponent from '@/components/MatchesComponent'
    import api from '@/services/api.js'

    export default{
    /** Nome do Componente */
    name: "GroupStage",
    /** Nome dos Componentes importados a serem utilizados */
    components: { 
        PageTitleComponent, 
        CardComponent, 
        TableComponent, 
        ModalComponent,
        MatchesComponent 
    },
    /** Variáveis do projeto */
    data(){
      return{
        groups:[], /** Armazena todos os grupos carregados pela api */
        matches:[], /** Armazena todas as partidas carregadas pela api */
        groupMatches:[], /** Armazena as partidas do grupo selecionado */
        groupMatchName:'', /** Armazena o nome do grupo selecionado */
        tableColumns:['POS','TEAM','PTS','WIN','DRAW','LOS','GOAL SCORED','GOAL AGAINST','GOAL DIFF'], /** Listagem de todos os títulos das colunas da Tabela */
        keys:['position','team','points','won','draw','lost','goalsFor','goalsAgainst','goalDifference'] /** Listagem de todas as chaves para serem buscadas nos dados passados pra tabela */
      }
    },
    /** Sempre quando um grupo for selecionado, é chamada a função para filtrar as partidas deste grupo */
    watch:{
        groupMatchName(){
            this.groupMatches = this.getGroupMatches(this.groupMatchName)
        }
    },
    methods:{
        /**O grupo selecionado é setado na variável */
        setGroupMatches(group){
            this.groupMatchName = group            
        },
        /** As partidas do grupo selecionado são filtradas */
        getGroupMatches(group){
            return this.matches.filter((match)=>{
                return match.group == group
            })
        }
    },
    mounted(){
        /** Vai no endpoint para pegar os dados dos grupos do torneio */
        api.get('/standings').then(response =>{
            this.groups = response.data.standings
        })

        /** Vai no endpoint para pegar os dados das partidas do torneio, somente da fase de grupos */
        api.get('/matches',{params:{stage:'GROUP_STAGE'}}).then(response =>{
            this.matches = response.data.matches
        })               
    }

}
</script>

<style scoped>
</style>