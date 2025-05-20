/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: '#284E55',
        accent: '#4BB4E0',
        success: '#A1B14B',
        warning: '#A95641',
        light: '#F2F3F3',
        primary: '#2563eb',
        stroke: '#E5E7EB',
        boxdark: '#18181b',
        strokedark: '#27272a',
      },
      boxShadow: {
        switcher: '0 2px 8px 0 rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
} 