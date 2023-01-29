<template>
    <div class="page">
        <PageTitleComponent :title="'History of FIFA World Cup'"></PageTitleComponent>
        <div class="container-fluid page-content mx-auto">
            <div class="search mb-5 d-flex justify-content-center">
                <div class="mx-auto">
                    <input class="form-control form-control-lg" v-model="search" type="search" placeholder="Search for Team or Year...">
                </div>
            </div>
            <div class="row">
                <div v-if="!searchseasons.length" class="no-array d-flex justify-content-center align-items-center mb-3">
                    <p>No Data Found</p>
                </div>
                <div v-else class="col-lg-3 col-md-6 col-12 px-0" v-for="(season,index) in searchseasons" :key="index" >
                    <CardComponent :title="getYear(season.startDate)">
                        <template v-slot:content>
                            <img class="rounded mx-auto d-block mb-3" 
                            :src="require('../assets/img/wc-logos/'+getYear(season.startDate)+'.png')" alt="Logo" width="200" height="200">
                            <div class="champion d-flex justify-content-around align-items-center my-2">
                                <span>
                                    Champion
                                </span>
                                <div class="d-flex align-items-center mx-2">
                                    <img class="me-2" :src="season.winner.crest" alt="Logo" width="24" height="24">
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
                search:'',
            }
        },
        watch:{
            search(){
                this.searchseasons = this.seasons.filter((season)=>{
                    return season.winner.name.includes(this.search) || this.getYear(season.startDate).toString().includes(this.search);
                });
                console.log(this.searchseasons)
            }
        },
        methods:{
            getYear(date){
                return new Date(date).getFullYear();
            },
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