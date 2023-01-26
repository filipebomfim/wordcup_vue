<template>
        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
                {{ title }}
                <slot name="header"></slot>
            </div>
            <div class="card-body overflow-auto">
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
        border: 5px solid #85092C;
        border-radius: 20px;
        max-height: 500px;
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