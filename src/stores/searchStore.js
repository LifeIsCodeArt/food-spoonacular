import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import getRecipes from "../services/api/getRecipes.js";
import getRecipesInfo from "../services/api/getRecipeInfo.js";
import getRecipeNutrition from "../services/api/getRecipeNutrition.js"

export const useRecipeInfoStore = defineStore('recipeInfoStore', () => {

    const recipes = ref([])

    const getCurrentRecipesInfo = async () => {
        try {
            const res = await getRecipesInfo.getRecipeInfo()
            recipes.value = res.data
            console.log(recipes.value)
            console.log(recipes)
        }
        catch (err) {
            console.log(err)
        }
    }

    return {recipes, getCurrentRecipesInfo}

})

export const useRecipeNutritionStore = defineStore('recipeNutritionStore', () => {

    const recipes = ref([])

    const getCurrentRecipeNutrition = async (id) => {
        try {
            const res = await getRecipeNutrition.getRecipeNutrition(id)
            recipes.value = res.data
            console.log(recipes.value)
        }
        catch (err) {
            console.log(err)
        }
    }

    return {recipes, getCurrentRecipeNutrition}

})




export const useRecipesStore = defineStore('recipesStore', () => {

    const recipes = ref([])

    const getCurrentRecipes = async () => {
        try {
            const res = await getRecipes.getRecipes()
            recipes.value = res.data.results
            console.log(recipes.value)
        }
        catch (err) {
            console.log(err)
        }
    }

    return {recipes, getCurrentRecipes}

})
