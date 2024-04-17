import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('headerStore', () => {

  const activePlate = ref(1)

  const menu = ref([

    {
      id:1,
      text: 'Home',
      path: '/home'
    },
    {
      id:2,
      text: 'Recipes',
      path: '/recipes'
    },
    {
      id:3,
      text: 'Ingridients',
      path: '/ingridients'
    },
    {
      id:4,
      text: 'Contacts',
      path: '/contacts'
    },
    {
      id:5,
      text: 'About Us',
      path: '/about'
    },
  ])


  return { menu, activePlate}
})
