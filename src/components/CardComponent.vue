<!-- 
    Author: Filipe Bomfim Santos Furtado
    File: CardComponent.vue
    Description: 
        Componente para exibição do card nas páginas do site
 -->

<template>
        <div class="card m-2 ">
            <div class="card-header d-flex justify-content-between align-items-center">
                <!-- Título do Card e slot header para qualquer outra informação que fique no header -->
                {{ title }}
                <slot name="header"></slot>
            </div>
            <div class="card-body overflow-auto">
                <!-- Slot de conteúdo do site para exibibição das informações pertinentes das páginas -->
                <slot name="content"></slot>
            </div>
            <div class="card-footer">
            <!-- Slot de footer para informações a serem inseridas no rodapé do card -->
                <slot name="footer"></slot>
            </div>
        </div>
</template>

<script>
    export default{
        /** Nome do Componente */
        name: 'CardComponent',
        /** Título do card passado como variável */
        props: ['title']        
    }
</script>

<style scoped>
    .card{
        max-height: 500px;
        box-shadow: rgba(0, 0, 0, 0.7) 0px 5px 15px;
        border: 0;
    }
   .card-header{
        background-color: var(--color-background-2);
        color: white;
        font-size: 1.2rem;
        font-family: var(--font-sec);
   }

   .card-body{
        background-color: var(--color-background-1);
   }

   .card-footer{
        background-color: var(--color-background-2);
   }



</style>