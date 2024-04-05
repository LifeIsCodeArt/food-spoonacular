<script setup>

const props = defineProps({
    link: {
        type: Object,
        default: () => {}
    }
})
</script>


<template>

    <li class="font-normal rubik text-[17px] leading-[18px] text-[#666666] mt-[10px]">

        <a :href="link.path" class="">{{link.text}}</a>

    </li>

</template>

<style scoped>

</style>