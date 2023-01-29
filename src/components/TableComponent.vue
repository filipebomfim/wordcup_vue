<template>
    <div class="table-responsive">
        <table class="table table-borderless table-sm ">
            <thead>
                <tr class="text-center">
                    <th v-for="(column, index) in columns" :key="index" scope="col">{{column}}</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr class="text-center" v-for="obj in data" :key="obj.id">
                    <td v-for="(value,index) in keys" :key="index">
                        <span v-if="value=='team'" class="d-flex nowrap text-highlight">
                            <img class="me-2" :src="obj.team.crest" alt="Logo" width="24" height="24">
                            {{ obj.team.name }}
                        </span>    
                        <span v-else>
                            {{obj[value]}}
                        </span>                    
                    </td>
                </tr>                
            </tbody>
        </table>
    </div>
</template>

<script>
    export default{
        name:'TableComponent',
        props:['data','columns','keys'],
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

    table{
        border-collapse: unset;
    }
</style>