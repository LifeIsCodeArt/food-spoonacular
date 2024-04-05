import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFooterStore = defineStore('footerStore', () => {



  const footerIcons = ref([

    [{
      id:1,
      alt: 'Facebook',
      path: '/src/assets/icons/footer/footer-socials/facebook.png'
    },
    {
      id:2,
      alt: 'Instagram',
      path: '/src/assets/icons/footer/footer-socials/instagram.png'
    },
    {
      id:3,
      alt: 'LinkedIn',
      path: '/src/assets/icons/footer/footer-socials/linkedIn.png'
    },
    {
      id:4,
      alt: 'Be',
      path: '/src/assets/icons/footer/footer-socials/be.png'
    },
    {
      id:5,
      alt: 'We',
      path: '/src/assets/icons/footer/footer-socials/we.png'
    }
  ],
  [
    {
      id:1,
      alt: 'Apple pay',
      path: '/src/assets/icons/footer/footer-payment/Payment_Method.png'
    },
    {
      id:2,
      alt: 'Amazon pay',
      path: '/src/assets/icons/footer/footer-payment/Payment_Method(1).png'
    },
    {
      id:3,
      alt: 'Google pay',
      path: '/src/assets/icons/footer/footer-payment/Payment_Method(2).png'
    },
    {
      id:4,
      alt: 'Visa pay',
      path: '/src/assets/icons/footer/footer-payment/Payment_Method(3).png'
    },
    {
      id:5,
      alt: 'Payoneer pay',
      path: '/src/assets/icons/footer/footer-payment/Payment_Method(4).png'
    },
    {
      id:6,
      alt: 'We',
      path: '/src/assets/icons/footer/footer-payment/Payment_Method(5).png'
    }
  ]
  ])


  const footerLists = ref([

    [
        {
      id:1,
      text: 'Pagination',
      path: '#'
    },
      {
        id:2,
        text: 'Terms & Conditions',
        path: '#'
      },
      {
        id:3,
        text: 'Contact',
        path: '#'
      },
      {
        id:4,
        text: 'Home page',
        path: '#'
      },
      {
        id:5,
        text: 'Term of use',
        path: '#'
      },

    ],
    [
      {
        id:1,
        text: 'Help Center',
        path: '#'
      },
      {
        id:2,
        text: 'Address Store',
        path: '#'
      },
      {
        id:3,
        text: 'Privacy Policy',
        path: '#'
      },
      {
        id:4,
        text: 'Receivers & Amplifiers',
        path: '#'
      },
      {
        id:5,
        text: 'Clothings',
        path: '#'
      }
    ],
    [{
      id:1,
      text: 'DelDelivery',
      path: '#'
    },
      {
        id:2,
        text: 'Legal Notice',
        path: '#'
      },
      {
        id:3,
        text: 'Documentatio',
        path: '#'
      },
      {
        id:4,
        text: 'Secure payment',
        path: '#'
      },
      {
        id:5,
        text: 'Stores',
        path: '#'
      }
    ],
  ])

  const footerHeaders = ref(['Help & Information','About Us','Categories'])

  return { footerIcons, footerLists, footerHeaders }
})
