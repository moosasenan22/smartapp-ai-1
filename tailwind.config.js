/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#11131E',
        'surface-primary': '#1A1D2A',
        'surface-secondary': '#232634',
        'text-primary': '#F0F0F0',
        'text-secondary': '#A0A3B1',
        'border-color': '#313547',
        'accent-blue': '#4A90E2',
        'accent-purple': '#7B61FF',
        'accent-green': '#50E3C2',
        'accent-orange': '#F5A623',
        'accent-red': '#D0021B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #7B61FF 0%, #4A90E2 100%)',
        'welcome-gradient': 'linear-gradient(98.46deg, #4A90E2 0%, #7B61FF 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'medium': '0 8px 40px rgba(0, 0, 0, 0.15)',
        'large': '0 20px 60px rgba(0, 0, 0, 0.2)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0,0,0,0.05)',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
      },
    },
  },
  plugins: [],
}
