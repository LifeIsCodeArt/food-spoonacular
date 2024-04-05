<script setup>
const props = defineProps({
    item: {
        type: Object,
        default: () => {}
    }
})
</script>


<template>

    <div class="flex flex-col items-center" :class="item.id%2 === 0 ? 'pt-[50px] relative': 'pt-0'">

        <div class="mb-[40px] flex items-center justify-center w-[88px] h-[88px] rounded-[50%]" :class="item.background">

            <img :src="item.image_path" :alt="item.header">
            
        </div>

        <div class="flex flex-col items-center">

            <h2 class="mb-[20px]">

                {{item.header}}

            </h2>

            <p class="w-[325px] text-center">

                {{item.text}}

            </p>

        </div>

        <img v-if="item.id%2 === 0" src="@/assets/icons/homepage/templates/line_left.png" alt="" class="absolute top-[90px] right-[300px]">




        <img v-if="item.id%2 === 0" src="@/assets/icons/homepage/templates/line_right.png" alt="" class="absolute top-[50px] left-[300px]">

    </div>



</template>

<style scoped>

</style>