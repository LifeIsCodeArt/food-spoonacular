<script setup>

import {useHomeStore} from "@/stores/homeStore.js";

import AboutItem from "@/components/Homepage/aboutItem.vue";
import Category from "@/components/Homepage/category.vue"

import {computed} from "vue";

const store = useHomeStore()

const templates = computed(()=> store.templateItems)

</script>

<template>

    <section class="pt-[40px] pl-[133px] bg-[#FFFBF3] h-[600px] flex">

        <div class=" w-[50%] pt-[43px] flex flex-col">

            <Category :name="'Fast Delivery'"/>

            <div class="w-[540px] mb-[30px] mt-[15px]">

                <h1 class="font-bold text-[48px] leading-[64px] rubik">

                    Discover Your Favourite Food and <span class="text-[#FCC647]">Test Forever</span>

                </h1>

                <div class="font-normal text-[16px] leading-[32px] mt-[30px] rubik">

                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

                </div>

            </div>

            <div class="flex">

                <button class="text-white px-[20px] pt-[15px] pb-[13px] bg-[#FCC647] text-[19px] leading-[23px] font-normal rubik rounded-3xl">

                    Get Started

                </button>



                <div class="bg-white rounded-[50%] ml-[16px] ">

                    <a href="#" class="flex items-center h-full">

                        <img src="../assets/icons/homepage/click-on.png" alt="">

                        <p class="text-[17px] leading-[32px] rubick ml-[14px]">More Information</p>

                    </a>

                </div>


            </div>

        </div>

        <div class="w-[50%] bg-mainYellow bg-right bg-no-repeat  h-full">

            <div class="w-full  bg-mainDish  bg-no-repeat bg-center h-full"></div>

        </div>

    </section>

    <section class="">

        <div class="flex flex-col items-center pt-[96px] mb-[14px]">

            <h2 class="text-[36px] rubik  text-center font-bold">

                How it works

            </h2>


            <p class="text-[14px] rubik leading-[27px] text-center font-normal mt-[30px]">

                Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>

                Lorem Ipsum has been the industry

            </p>

        </div>

        <div class="mt-[45px] flex justify-around px-[150px]">

            <about-item v-for="item in templates" :item="item" />

        </div>

    </section>

    <section class="mt-[115px] bg-[#FFFBF3] h-[712px]">

        <div class="bg-delivery bg-no-repeat h-full ml-[140px] mr-[180px] flex items-center justify-end">

            <div class="pt-[98px] pb-[107px] flex flex-col w-[507px]">

                <Category :name="'Our Target'" class="mb-[13px] rounded-xl w-[125px]"/>

                <h2 class="font-bold rubik text-[36px] text-[#535353] leading-[47px]">

                    We Earn Your Trust and are Diligent in Your Case

                </h2>

                <p class="font-normal text-[16px] leading-[30px] text-[#667085] my-[30px]">

                    <span class="mb-[10px]">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,<br/><br/>
                    </span>
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </p>

                <button class="text-white px-[20px] pt-[15px] pb-[13px] bg-[#FCC647] text-[19px] leading-[23px] font-normal rubik rounded-xl w-[150px]">

                    Search Now

                </button>

            </div>

        </div>

    </section>

    <section class="px-[135px] py-[70px]">

        <div class="flex items-center justify-center">

            <div class="bg-meat h-full w-[570px] h-[412px]"/>

            <div class="w-[570px]">

                <h2 class="font-bold text-[54px] leading-[75.5px]">

                    Fresh Product Directly
                    To Your Door With Free
                    Delivery

                </h2>

                <div class="flex flex-col">

                    <p class="text-[#333333] font-normal text-[16px] leading-[23px]">

                        There are many variations of passage Lorem Ipsum available, but te majority hav suffered alteration in some form, by injected humour

                    </p>

                    <div class="flex">

                        <p class="text-[#333333] font-normal text-[16px] leading-[23px]">

                            Free Delivery For All Order

                        </p>

                        <p class="text-[#333333] font-normal text-[16px] leading-[23px]">

                            Only Fresh Food

                        </p>

                    </div>

                </div>

            </div>

        </div>

    </section>

</template>
