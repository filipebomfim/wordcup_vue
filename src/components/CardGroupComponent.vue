<template>
    <div class="card col-md-3 col-sm-6 px-0">
        <div class="card-header">
            {{groupTeams.group.replace('_',' ')}}
        </div>
        <div class="card-body">
            <TableTeamsComponent :teams="groupTeams.table"></TableTeamsComponent>
        </div>
    </div>
</template>

<script>
    import TableTeamsComponent from '../components/TableTeamsComponent'

    export default{
        name: 'CardGroupComponent',
        props: ['groupTeams'],
        components:{TableTeamsComponent},
        
    }
</script>

<style scoped>
    .card{
        border: 5px solid #85092C;
        border-radius: 20px;
    }
    .card-header{
        background-color: #85092C;
        border: 1px solid white;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        color: var(--color-text-light);
        font-family: 'qatar2022_arabicheavy' !important;
        font-weight: normal !important;
        font-style: normal !important;
        text-align: center;
    }

</style>