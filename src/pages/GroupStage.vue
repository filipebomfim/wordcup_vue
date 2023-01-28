<template>
    <div class="page">
        <PageTitleComponent :title="'Group Stage'"></PageTitleComponent>
        <div class="container-fluid page-content mx-auto">
            <div class="row">
                <div class="col-xl-3 col-md-6 col-12 px-0" v-for="(group,index) in groups" :key="index" >
                    <CardComponent :title="group.group.replace('_',' ')" >
                        <template v-slot:header>
                            <a href="#" v-on:click="setGroupMatches(group.group)" data-bs-toggle="modal" data-bs-target="#modal"><i class="bi bi-calendar2-range"></i></a>
                        </template>
                        <template v-slot:content>
                            <TableComponent :columns="tableColumns" :data="group.table" :keys="keys"></TableComponent>
                        </template>
                    </CardComponent> 
                </div> 

                <ModalComponent :title="'Matches from '+groupMatchName.replace('_',' ')">
                    <template v-slot:content>
                        <MatchesComponent :matches="groupMatches"></MatchesComponent>
                    </template>
                </ModalComponent>
            </div>
        </div>
    </div>
</template>

<script>
    import PageTitleComponent from '@/components/PageTitleComponent'
    import CardComponent from '@/components/CardComponent'
    import TableComponent from '@/components/TableComponent'
    import ModalComponent from '@/components/ModalComponent'
    import MatchesComponent from '@/components/MatchesComponent'
    import api from '@/services/api.js'

    export default{
    name: "GroupStage",
    components: { PageTitleComponent, CardComponent, TableComponent, ModalComponent,MatchesComponent },
    data(){
      return{
        groups:[],
        matches:[],
        groupMatches:[],
        groupMatchName:'',
        tableColumns:['POS','TEAM','PTS','WIN','DRAW','LOS','GOAL SCORED','GOAL AGAINST','GOAL DIFF'],
        keys:['position','team','points','won','draw','lost','goalsFor','goalsAgainst','goalDifference']
      }
    },
    watch:{
        groupMatchName(){
            this.groupMatches = this.getGroupMatches(this.groupMatchName)
            console.log(this.groupMatches)
        }
    },
    methods:{
        setGroupMatches(group){
            this.groupMatchName = group            
        },
        getGroupMatches(group){
            return this.matches.filter((match)=>{
                return match.group == group
            })
        }
    },
    mounted(){
        api.get('/standings').then(response =>{
            this.groups = response.data.standings
        })

        api.get('/matches',{params:{stage:'GROUP_STAGE'}}).then(response =>{
            this.matches = response.data.matches
        })               
    }

}
</script>

<style scoped>
</style>