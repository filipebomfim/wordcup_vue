<template>
    <div class="table-responsive">
        <table class="table table-borderless table-sm ">
            <thead>
                <tr class="text-center">
                    <th scope="col">POS</th>
                    <th scope="col">TEAM</th>
                    <th scope="col">PTS</th>
                    <th scope="col">WIN</th>
                    <th scope="col">DRAW</th>
                    <th scope="col">LOS</th>
                    <th scope="col">GOAL SCORED</th>
                    <th scope="col">GOAL AGAINST</th>
                    <th scope="col">GOAL DIFF</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr class="text-center" v-for="(team,index) in teams" :key="index">
                    <th scope="row">{{ team.position }}°</th>
                    <td class="d-flex nowrap text-highlight" >
                        <img class="me-2" :src="team.team.crestUrl" alt="Logo" width="24" height="24">                 
                        {{ team.team.name }}
                    </td>
                    <td class="text-highlight">{{ team.points }}</td>
                    <td>{{ team.won }}</td>
                    <td>{{ team.draw }}</td>
                    <td>{{ team.lost }}</td>
                    <td>{{ team.goalsFor }}</td>
                    <td>{{ team.goalsAgainst }}</td>
                    <td>{{ team.goalDifference }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default{
        name:'TableTeamsComponent',
        props:['teams'],
        mounted(){
            
        }
    }
</script>

<style scoped>

    td{
        color: gray;
    }
    .text-highlight{
        color: #85092C;
        
    }

    .nowrap {
        white-space:nowrap;
    }
</style>