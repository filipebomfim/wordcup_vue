<!-- 
    Author: Filipe Bomfim Santos Furtado
    File: TableComponent.vue
    Description: 
        Componente para exibição da tabela nas páginas do site
 -->

<template>
    <div class="table-responsive">
        <table class="table table-borderless table-sm ">
            <thead>
                <!-- Colunas da tabela a ser gerada -->
                <tr class="text-center">
                    <th v-for="(column, index) in columns" :key="index" scope="col">{{column}}</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <!-- Cada um dos dados da tabela a ser gerada é lido -->
                <tr class="text-center" v-for="obj in data" :key="obj.id">
                    <!-- A combinação de dado.chave retorna o valor a ser exibido -->
                    <td v-for="(value,index) in keys" :key="index">
                        <!-- Caso a chave seja o valor 'team', exibir o icone e o nome do time -->
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
        /** Nome do Componente */
        name:'TableComponent',
        props:[
            'data', /** Dados a serem exibidos na tabela */
            'columns', /** Título das colunas da tabela */
            'keys' /** chave dos objetos para os valores serem exibidos na tabela */
        ],
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