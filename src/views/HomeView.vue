<script setup>

import {useTemplatesStore} from "@/stores/homeStore.js";

import AboutItem from "@/components/Homepage/aboutItem.vue";
import Category from "@/components/Homepage/category.vue"

import {computed, onMounted, ref} from "vue";

const templates = useTemplatesStore()


const templatesArray = computed(()=> templates.templateItems)



const findBox = ref()
const workBox = ref()


window.onscroll = () =>  {

    const elementFindBox = findBox.value.getBoundingClientRect().top
    const elementWorks = workBox.value.getBoundingClientRect().top



    if(elementFindBox <= 450){

        findBox.value.classList.add('element-show')
        console.log('class added')

    }

    else if(elementWorks <= 450){

        workBox.value.classList.add('element-show')
        console.log('class added2')

    }

    else {

        console.log('class not added')

    }

}




</script>

<template >

    <div class="">

    <section class="pt-[40px] pl-[133px] bg-[#FFFBF3] h-[600px] flex">

        <div class=" w-[50%] pt-[43px] flex flex-col ">

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

        <div class="mt-[45px] flex justify-around px-[150px] element-animation-work" ref="workBox">

            <about-item v-for="item in templatesArray" :item="item" />

        </div>

    </section>

    <section class="mt-[115px] bg-[#FFFBF3] h-[712px]" ref="">

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

    <section class="px-[135px] py-[70px] element-animation" ref="findBox">

        <div class="flex  justify-center  h-[412px]">

            <div class="bg-meat w-[570px] h-[412px] mr-[30px]"/>

            <div class="w-[570px] flex flex-col justify-between " >

                <h2 class="font-bold text-[54px] leading-[75.5px] animate-pulse bg-gradient-to-r from-red-500 via-green-500 to-violet-blue bg-clip-text text-transparent">

                    Fresh Product Directly
                    To Your Door With Free
                    <span class="border-b-[20px] border-red-300">Delivery</span>

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

                <div class="flex items-center mt-[20px] ">

                    <div class="before:content-[url('@/assets/icons/homepage/agree_gray.png')] before:mr-0.5 before:text-red-500 mr-[40px]">

                        Free Delivery For All Order

                    </div>


                    <div class="before:content-[url('@/assets/icons/homepage/agree_gray.png')] before:mr-0.5 before:text-red-500">

                        Only Fresh Food

                    </div>

                </div>

                <button class="border border-red-400 w-[110px] h-[50px] text-[16px] leading-[25.6px] rubick text-[#E21A43] hover:bg-black hover:font-bold hover:duration-500">

                    Find Now

                </button>

            </div>

        </div>

    </section>

    <div v-if="bottom">Uhuy! Sampai bawah</div>

    </div>
</template>

<style>
.element-animation{
    top: 0;
    opacity: 0;
    position: relative;
}

.element-animation.element-show{
    position: relative;
    top: -20px;
    opacity: 1;
    transition-duration: 1.4s;
}

.element-animation-work{
    transform: translateX(-30%) translateY(40%);
    visibility: hidden;
    position: relative;
}

.element-animation-work.element-show{
    position: relative;
    transform: translateX(0) translateY(0%);
    visibility: visible;
    top: -20px;
    transition-duration: 1.4s;
}

</style>