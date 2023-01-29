<template>
    <div class="table-responsive">
        <table class="table table-borderless table-sm">
                <tbody class="table-group-divider" v-for="(match,index) in matches" :key="index">                    
                    <tr class="matchStage" v-if="matchesStage != match.stage" :changeStage= setStage(match.stage)>
                        <td id="stage" colspan="12" class="text-center">
                            {{ match.stage.replace('_',' ') }}
                        </td> 
                    </tr>
                    <tr class="matchDate my-5" v-if="matchesDate != getDate(match.utcDate)">
                        <td colspan="12" class="text-center" :date="setDate(match.utcDate)">
                            {{getDate(match.utcDate)}}  
                        </td>                            
                    </tr>
                    <tr class="text-center my-5">
                        <td class="team align-middle">
                            <span class="d-flex nowrap text-highlight">
                                    <img class="mx-3" :src="match.homeTeam.crest" alt="Logo" width="24" height="24">
                                    <span>{{ match.homeTeam.name }}</span>
                            </span>
                        </td>
                        <td class="text-center ">
                            <div class="d-flex justify-content-center align-middle">
                                <span class="score">
                                    {{ match.score.fullTime.home }}
                                </span> 
                                <span class="versus mx-3">X</span>
                                <span class="score">
                                    {{ match.score.fullTime.away }}
                                </span> 
                            </div>
                        </td>
                        <td class="team align-middle">
                            <span class="d-flex nowrap text-highlight align-middle">
                                    <img class="mx-3" :src="match.awayTeam.crest" alt="Logo" width="24" height="24">
                                    <span>{{ match.awayTeam.name }}</span>
                            </span>
                        </td>
                    </tr>
                    <tr class="text-center penalties-match" v-if="match.score.duration == 'PENALTY_SHOOTOUT'">
                        <td class="align-middle">
                            <span class="d-flex nowrap text-highlight">
                                    <span>Regular Time</span>
                            </span>
                        </td>
                        <td>
                            <span>{{ match.score.regularTime.home }}</span> 
                            <span class="mx-3">X</span>
                            <span>{{ match.score.regularTime.away }}</span> 
                        </td>
                        <td class="align-middle"></td>
                    </tr>
                    <tr class="text-center penalties-match" v-if="match.score.duration == 'PENALTY_SHOOTOUT'">
                        <td class="align-middle">
                            <span class="d-flex nowrap text-highlight">
                                    <span>Extra Time</span>
                            </span>
                        </td>
                        <td>
                            <span>{{ match.score.extraTime.home }}</span> 
                            <span class="mx-3">X</span>
                            <span>{{ match.score.extraTime.away }}</span> 
                        </td>
                        <td class="align-middle"></td>
                    </tr>
                    <tr class="text-center penalties-match" v-if="match.score.duration == 'PENALTY_SHOOTOUT'">
                        <td class="align-middle">
                            <span class="d-flex nowrap text-highlight">
                                    <span>Penalties</span>
                            </span>
                        </td>
                        <td>
                            <span>{{ match.score.penalties.home }}</span> 
                            <span class="mx-3">X</span>
                            <span>{{ match.score.penalties.away }}</span> 
                        </td>
                        <td class="align-middle"></td>
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
            console.log(this.matches)
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
                return score.fullTime.home - score.extraTime.home - score.penalties.home;
            },
            getResultFullTimeAway(score){
                return score.fullTime.away - score.extraTime.away - score.penalties.away;
            }
        }
    }
</script>

<style scoped>

    table{
        border-collapse: separate;
    }
    .matchDate{
        background-color: var(--color-text-title);
        color: var(--color-text-light) ;
    }

    .matchStage{
        background-color: #380413;
        color: var(--color-text-light);
        font-family: 'qatar2022_arabicheavy';
    }

    .team{
        width: 180px;
    }

    .team span span{
        font-size: 1.1em;
        color: var(--color-text-title);
    }

    .score{
        font-size: 1.2em;
        background-color: var(--color-text-title);
        color: var(--color-text-light);
        width: 30px;
        border-radius: 5px;
    }

    .versus{
        font-size: 1.2em;
    }
   


</style>