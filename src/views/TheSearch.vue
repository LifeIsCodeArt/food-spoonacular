<script setup>

import {useRecipeInfoStore, useRecipeNutritionStore, useRecipesStore} from "@/stores/searchStore.js";

import {computed, onMounted, ref} from "vue";

import SearchedRecipe from '../components/Search/searchedRecipe.vue'


const recipeInfo = useRecipeInfoStore()
const recipeNutrition = useRecipeNutritionStore()
const recipes = computed(() => useRecipesStore().recipes)

onMounted(()=> {

    //recipeNutrition.getCurrentRecipeNutrition()
    //recipeInfo.getCurrentRecipesInfo()
    useRecipesStore().getCurrentRecipes()

})
</script>


<template>

    <div class="flex  items-center justify-center">

        <div class="flex items-center justify-center w-[450px] relative">

            <input type="text" class=" pl-[15px] py-[10px] border border-gray-200 rounded-3xl w-[100%] outline-none placeholder:font-medium" placeholder="Search recipe">
            <button class="absolute bg-blue-500 font-bold rubick text-[16px] px-[40px] py-[10px] text-white rounded-3xl right-0">Search</button>

        </div>

        <div class="flex flex-col">

            <SearchedRecipe v-for="recipe in recipes" :recipe="recipe" :key="recipe.id"/>

        </div>

    </div>

</template>

<style scoped>

</style>