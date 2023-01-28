<template>
        <div class="card m-2">
            <div class="card-header d-flex justify-content-between align-items-center">
                {{ title }}
                <slot name="header"></slot>
            </div>
            <div class="card-body px-0">
                <slot name="content"></slot>
            </div>
            <div class="card-footer">
                <slot name="footer"></slot>
            </div>
        </div>
</template>

<script>
    export default{
        name: 'CardComponent',
        props: ['title'],
        methods:{
            
        },
        mounted(){
            //console.log(this.matchesGroups)
        },
        
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