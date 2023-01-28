<template>
    <!-- Modal -->
    <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="Modal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{title}}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <slot name="content"></slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'ModalComponent',
        props:['title'],
        mounted(){
            
        }
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