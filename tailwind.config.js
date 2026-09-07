module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        turnPage: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%, 100%': { transform: 'rotateY(-180deg)' },
        },
        pulseLight: {
          '0%, 100%': { opacity: '0.4', transform: 'translateX(-50%) scale(0.95)' },
          '50%': { opacity: '0.9', transform: 'translateX(-50%) scale(1.1)' },
        },
        floatBook: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};