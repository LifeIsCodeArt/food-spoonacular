<script setup>
import {onMounted,ref} from "vue";

import {useRecipeNutritionStore} from "@/stores/searchStore.js";

const recipeNutrition = useRecipeNutritionStore()

const props = defineProps({
    recipe: {
        type: Object,
        default: () => {}
    }
})

const currentEl = props.recipe.id



onMounted(()=>{

    recipeNutrition.getCurrentRecipeNutrition(currentEl)

})
</script>

<template>

    <div class="flex flex-col bg-blue-300 w-[321px]"  :id="recipe.id">

        <img :src="recipe.image" alt="" class="h-[231px] rounded-t-3xl">

        <div class="flex flex-col py-[20px] px-[20px]">

            <h2 class="">
                
                {{recipe.title}}
                
            </h2>
            
            <div class="flex">*5 star*</div>

            <div class="flex items-center justify-between">

                <div class="">



                </div>

                <div class="flex">

                    <div class="">

                        Net Carbs g*

                    </div>

                    <div class="">

                        Protein Carbs g*

                    </div>

                    <div class="">

                        Fat Carbs g*

                    </div>

                </div>

            </div>

        </div>

    </div>

</template>

<style scoped>

</style>