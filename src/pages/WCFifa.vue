<template>
    <div class="page">
        <PageTitleComponent :title="'History of FIFA World Cup'"></PageTitleComponent>
        <div class="container-fluid page-content mx-auto">
            <div class="search d-flex justify-content-center mb-3">
                <form class="row d-flex justify-content-center">
                    <div class="col-auto d-flex justify-content-center">
                        <input class="form-control form-control-lg" v-model="team" type="text" placeholder="Search for Team...">
                        <i class="bi bi bi-search"></i>
                    </div>
                </form>
            </div>
            <div class="row">
                <div class="col-md-3 col-sm-6 px-0" v-for="(season,index) in searchseasons" :key="index" >
                    <CardComponent :title="getYear(season.startDate)">
                        <template v-slot:content>
                            <img class="rounded mx-auto d-block mb-3" 
                            :src="require('../assets/img/wc-logos/'+getYear(season.startDate)+'.png')" alt="Logo" width="200" height="200">
                            <div class="champion d-flex justify-content-between align-items-center px-3 my-2">
                                <span>
                                    Champion
                                </span>
                                <div class="d-flex align-items-center">
                                    <img class="me-2" :src="season.winner.crestUrl" alt="Logo" width="24" height="24">
                                    {{season.winner.name}} 
                                </div>                                  
                            </div>
                            <div class="d-flex justify-content-around">
                                <p>Start Date</p>
                                <p>{{ season.startDate }}</p>
                            </div>
                            <div class="d-flex justify-content-around">
                                <p>End Date</p>
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
    import PageTitleComponent from '@/components/PageTitleComponent'
    import CardComponent from '@/components/CardComponent'
    import api from '@/services/api.js'


    export default{
        name: 'WCFifa',
        components:{
            PageTitleComponent,
            CardComponent
        },
        data(){
            return {
                seasons:[],
                searchseasons:[],
                team:''
            }
        },
        watch:{
            team(){
                this.searchseasons = this.seasons.filter((season)=>{
                    return season.winner.name.includes(this.team);
                });
                console.log(this.searchseasons)
            }
        },
        methods:{
            getYear(date){
                return new Date(date).getFullYear();
            }
        },
        mounted(){
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
        background-color: #5E071F;
        color: white;
        font-size: 20px;
    }

    p{
        margin-bottom: 5px;
    }

    i{
        font-size: 40px;
        position: relative;
        right: 50px;
        color: #5E071F;
    }
</style>