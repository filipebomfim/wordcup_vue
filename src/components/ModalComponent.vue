<!-- 
    Author: Filipe Bomfim Santos Furtado
    File: ModalComponent.vue
    Description: 
        Componente para exibição do modal nas páginas do site
 -->

<template>
    <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="Modal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <!-- Título do modal e slot header para qualquer outra informação que fique no header -->
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{title}}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- Slot de conteúdo do modal para exibibição das informações pertinentes das páginas -->
                    <slot name="content"></slot>
                </div>
                <div class="modal-footer">
                    <!-- Slot de footer para informações a serem inseridas no rodapé do modal -->
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        /** Nome do Componente */
        name:'ModalComponent',
        /** Título do modal passado como variável */
        props:['title']
    }

</script>

<style scoped>
   .modal-header{
        background-color: #85092C;
        color: var(--color-text-light);
        text-align: center;
    }

    .modal-body{
        background-color: var(--color-background-1);
    }

    .modal-footer{
        background-color: var(--color-background-2);
    }
</style>