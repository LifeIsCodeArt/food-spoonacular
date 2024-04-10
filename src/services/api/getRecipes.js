import http from "@/services/http.js";
import {ref} from 'vue'
//const recipe = ref(localStorage.getItem('111'))
export default {
    getRecipes() {
        //return http.get(`/movie/${recipe.value}/keywords?api_key=5235e8164cdbeab41f75539ba6100f6b`)
        return http.get(`/recipes/complexSearch?apiKey=7d74d97762844fd89a6a22d4232601da&query=pasta`)
    }
}