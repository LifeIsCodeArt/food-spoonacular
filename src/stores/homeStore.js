import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

  export const useTemplatesStore = defineStore('templatesStore', () => {

    const templateItems = ref([

      {
        id: 1,
        header: 'Search',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        background: 'bg-[#335DFF]',
        image_path: '/src/assets/icons/homepage/templates/Search.png'
      },
      {
        id: 2,
        header: 'Choose',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        background: 'bg-[#F6CA00]',
        image_path: '/src/assets/icons/homepage/templates/Choose.png'
      },
      {
        id: 3,
        header: 'Payment',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        background: 'bg-[#0BD28E]',
        image_path: '/src/assets/icons/homepage/templates/Payment.png'
      },


    ])


    return {templateItems}
  })

