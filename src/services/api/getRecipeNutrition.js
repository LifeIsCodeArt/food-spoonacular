import http from "@/services/http.js";

//const recipe = ref(localStorage.getItem('111'))
export default {
    getRecipeNutrition(id) {
        //return http.get(`/movie/${recipe.value}/keywords?api_key=5235e8164cdbeab41f75539ba6100f6b`)
        return http.get(`/recipes/${id}/nutritionWidget.json?apiKey=7d74d97762844fd89a6a22d4232601da`)
    }
}