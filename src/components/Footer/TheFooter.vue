<script setup>

import {useFooterStore} from "@/stores/footerStore.js";

import FooterIcon from "@/components/Footer/footerIcon.vue";
import ListHeader from "@/components/Footer/listHeader.vue"
import LinkItem from  "@/components/Footer/linkItem.vue"

import {computed} from "vue";

const store = useFooterStore()

const socials = computed(()=> store.footerIcons[0])

const payment = computed(()=> store.footerIcons[1])

</script>


<template>


    <footer class="w-full bg-[#F7F7F7]">

        <div class="px-[135px] pt-[90px] flex flex-col">

            <div class="flex ">


                <div class="flex flex-col mr-[100px]">

                    <div class="font-bold text-[26px] ">

                        Food <span class="text-[#FCC647] pl-[10px]">Space</span>

                    </div>

                    <div class="mt-[24px] mb-[15px]">

                        <p class="font-normal text-[#666666] text-[16px] leading-[30.5px] rubik">

                            Sophisticated simplicity for the<br>
                            independent mind

                        </p>

                        <ul class="flex items-center">

                            <footer-icon v-for="item in socials" :key="item.id" :link="item"/>

                        </ul>

                    </div>
                    
                </div>


                <div class="flex justify-between h-[270px] w-[70%]">

                    <div class="">

                        <ListHeader :header="store.footerHeaders[0]"/>

                        <ul class="flex flex-col h-full">

                            <link-item v-for="link in store.footerLists[0]" :link="link" :key="link.id" />

                        </ul>

                    </div>

                    <div class="">

                        <ListHeader :header="store.footerHeaders[1]"/>

                        <ul class="flex flex-col h-full">

                            <link-item v-for="link in store.footerLists[0]" :link="link" :key="link.id" />

                        </ul>

                    </div>

                    <div class="">

                        <ListHeader :header="store.footerHeaders[2]"/>

                        <ul class="flex flex-col h-full">

                            <link-item v-for="link in store.footerLists[0]" :link="link" :key="link.id" />

                        </ul>

                    </div>

                </div>

            </div>

            <div class="mt-[32px] mb-[27px] flex justify-between">

                <p class="text-[14px] text-[#666666] rubik">

                    © Copyright 2022 | Woodbar By Graphicraz.

                </p>


                <ul class="flex items-center">

                    <footer-icon v-for="item in payment" :key="item.id" :link="item"/>

                </ul>

            </div>

        </div>

    </footer>

</template>

<style scoped>

</style>