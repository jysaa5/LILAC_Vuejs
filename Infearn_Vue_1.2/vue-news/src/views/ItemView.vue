<template>
    <div>
        item
    </div>
</template>
<script>
export default {
    created(){
        const itemId = this.$route.params.id;
        console.log(itemId);
    }
}
</script>
<style>
</style>