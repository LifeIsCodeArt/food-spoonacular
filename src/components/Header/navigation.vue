<script setup>

import {useHeaderStore} from "@/stores/headerStore.js";
const props = defineProps({
    link: {
        type: Object,
        default: () => {}
    }
})

const store = useHeaderStore()

</script>


<template>

    <li class="">

        <RouterLink :to="link.path" class="rubik font-bold text-[20px] leading-[28px]" :class="store.activePlate === link.id ? 'pb-[5px] text-[#FCC647] border-b-2 border-[#FCC647]' : 'pb-0 border-none' "
                    @click="store.activePlate = link.id">


            {{link.text}}

        </RouterLink>

    </li>

</template>

<style scoped>

</style>