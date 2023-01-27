<template>
    <div class="table-responsive">
        <table class="table table-borderless table-sm ">
                <tbody class="table-group-divider" v-for="(match,index) in matches" :key="index">
                    <tr class="matchStage my-5" v-if="matchesStage != match.stage" :changeStage= setStage(match.stage)>
                        <td id="stage" colspan="12" class="text-center">
                            {{ match.stage.replace('_',' ') }}
                        </td>                            
                    </tr>
                    <tr class="matchDate my-5" v-if="matchesDate != getDate(match.utcDate)">
                        <td colspan="12" class="text-center" :date="setDate(match.utcDate)">
                            {{getDate(match.utcDate)}}  
                        </td>                            
                    </tr>
                    <tr class="text-center">
                        <td >{{ getHour(match.utcDate) }}</td>
                        <td >{{ match.homeTeam.name }}</td>
                        <td v-if="match.score.duration == 'PENALTY_SHOOTOUT'">
                            {{ getResultFullTimeHome(match.score) }}
                        </td>
                        <td v-else>
                            {{ match.score.fullTime.homeTeam }}
                        </td>
                        <td >X</td>
                        <td v-if="match.score.duration == 'PENALTY_SHOOTOUT'">
                            {{ getResultFullTimeAway(match.score) }}
                        </td>
                        <td v-else>
                            {{ match.score.fullTime.awayTeam }}
                        </td>
                        <td >{{ match.awayTeam.name }}</td>
                    </tr>                
                    <tr class="text-center penalties-match" v-show="match.score.duration == 'PENALTY_SHOOTOUT'">
                        <td colspan="2">Extra Time</td>
                        <td>{{match.score.extraTime.homeTeam}}</td>
                        <td>X</td>
                        <td>{{match.score.extraTime.awayTeam}}</td>
                    </tr>
                    <tr class="text-center penalties-match" v-show="match.score.duration == 'PENALTY_SHOOTOUT'">
                        <td colspan="2">Penalties</td>
                        <td>{{match.score.penalties.homeTeam}}</td>
                        <td>X</td>
                        <td>{{match.score.penalties.awayTeam}}</td>
                    </tr>
                </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name:'MatchesComponent',
        props:['matches'],
        data(){
            return{
                matchesDate:'',
                matchesStage:'GROUP_STAGE',
            }
        },
        mounted(){
            console.log(this.matchesStage)
        },
        methods:{
            getDate(matchDate){
                return new Date(matchDate).toLocaleDateString('pt-BR')
            },
            setDate(matchDate){
                 this.matchesDate = new Date(matchDate).toLocaleDateString('pt-BR')
                 //console.log(this.matchesDate);
            },
            getHour(matchDate){
                return new Date(matchDate).toLocaleTimeString('pt-BR',{hour: '2-digit', minute:'2-digit'})
            },
            setStage(stage){
                this.matchesStage = stage; 
                //this.matchesStage = this.$el.querySelector("#stage").innerText
                           
            },
            getResultFullTimeHome(score){
                return score.fullTime.homeTeam - score.extraTime.homeTeam - score.penalties.homeTeam;
            },
            getResultFullTimeAway(score){
                return score.fullTime.awayTeam - score.extraTime.awayTeam - score.penalties.awayTeam;
            }
        }
    }
</script>

<style scoped>
    .matchDate{
        background-color: #85092C !important;
        color: var(--color-text-light) !important;
    }

    .matchStage{
        background-color: #380413;
        color: var(--color-text-light);
        font-family: 'qatar2022_arabicheavy';
    }

    

    table{
        border-collapse: separate;
    }

</style>