<script setup>

import {useHeaderStore} from "@/stores/headerStore.js";
import Navigation from "@/components/Header/navigation.vue";

const store = useHeaderStore()


</script>


<template>

    <header class="w-auto h-[80px] bg-[#FFFBF3]">

        <div class="px-[133px] h-full flex justify-between item-center ">

            <a href="#" class="block flex items-center text-[32px] leading-[39px] font-bold rubik">

                Food <span class="text-[#FCC647] pl-[15px]">Space</span>

            </a>

            <ul class="flex justify-between items-center w-[700px]">

                <navigation v-for="item in store.menu" :link="item"/>

            </ul>

        </div>

    </header>

</template>

<style scoped>

</style>