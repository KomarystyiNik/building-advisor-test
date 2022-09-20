/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        0.25: '1px',
        24.25: '97px',
        85: '340px',
        130: '520px',
        '1/10': '10%',
        '1.5/10': '15%',
        '3.2/10': '32%',
        '5.5/10': '55%',
        '3/5': '60%',
        '7/10': '70%',
        '3/10': '30%'
      },
      maxWidth: {
        40: '160px',
        47.5: '190px',
        85: '340px',
        100: '400px',
        145: '580px',
        247: '990px'
      },
      margin: {
        18: '72px'
      },
      height: {
        24.75: '99px',
        35: '140px',
        38: '152px',
        125: '500px'
      },
      colors: {
        white: '#FFFFFF',
        black: '#010101',
        'blue-600': '#3a68fb',
        'blue-500': '#0169bf',
        'blue-400': '#0082f3',
        'blue-300': '#6ebcff',
        'blue-200': '#acd9ff',
        'blue-100': '#d9ecff',
        grey: '#e5e5e7',
        'grey-50': '#F9FAFB',
        'grey-100': '#bebfbe',
        'grey-200': '#757575',
        'green-100': '#63c02c',
        'green-200': '#45af08'
      }
    }
  },
  plugins: []
}
