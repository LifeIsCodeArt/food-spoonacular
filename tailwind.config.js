/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      backgroundImage: {
        'mainDish': 'url(@/assets/images/homepage/dish.png)',
        'mainYellow': 'url(@/assets/images/homepage/background_yellow.png)',
        'delivery': 'url(@/assets/icons/homepage/templates/Delivery.png)',
        'meat': 'url(@/assets/images/homepage/meat.png)',
      }
    },
    plugins: [],
  }
}
