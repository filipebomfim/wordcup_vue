<template>
    <PageTitleComponent :title="'Playoffs'"></PageTitleComponent>
        <div class="container-fluid page-content mx-auto">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-md-6">
                    <CardComponent>
                        <template v-slot:content>
                            <MatchesComponent :matches="matches"></MatchesComponent>
                        </template>                        
                    </CardComponent>
                </div>                
            </div>
        </div>
</template>

<script>
    import CardComponent from '@/components/CardComponent'
    import MatchesComponent from '@/components/MatchesComponent'
    import PageTitleComponent from '@/components/PageTitleComponent'
    import api from '@/services/api.js'

    export default {
        name:'Playoffs',
        components:{
            CardComponent,
            MatchesComponent,
            PageTitleComponent
        },
        data(){
            return{
                matches:[]
            }
        },
        mounted(){
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