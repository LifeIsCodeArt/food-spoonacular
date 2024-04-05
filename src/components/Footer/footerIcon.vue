<script setup>
const props = defineProps({
    link: {
        type: Object,
        default: () => {}
    }
})
</script>


<template>

    <li class="mr-[10px]">

        <a href="#">

            <img :src="link.path" :alt="link.alt">

        </a>

    </li>

</template>

<style scoped>

</style>