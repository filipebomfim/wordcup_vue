<template>
    <div class="table-responsive">
        <table class="table table-borderless table-sm ">
                <tbody class="table-group-divider" v-for="(match) in matches" :key="match.id">
                    <tr class="matchDate my-5" v-show="matchesDate != getDate(match.utcDate)">
                        <td colspan="12" class="text-center">
                            {{getDate(match.utcDate)}}                            
                        </td>                            
                    </tr>
                    <tr class="text-center">
                        {{ setDate(match.utcDate) }}
                        <td>{{ getHour(match.utcDate) }}</td>
                        <td>{{ match.homeTeam.name }}</td>
                        <td>{{ match.score.fullTime.homeTeam }}</td>
                        <td>X</td>
                        <td>{{ match.score.fullTime.awayTeam }}</td>
                        <td>{{ match.awayTeam.name }}</td>
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
                matchesDate:''
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
            },
            getHour(matchDate){
                return new Date(matchDate).toLocaleTimeString('pt-BR',{hour: '2-digit', minute:'2-digit'})
            },
        }
    }
</script>

<style scoped>
    .matchDate{
        background-color: #85092C !important;
        color: var(--color-text-light) !important;
    }

    table{
        border-collapse: separate;
    }

</style>