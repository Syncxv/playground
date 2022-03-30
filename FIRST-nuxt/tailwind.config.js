module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}', './**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'yt-500': '#4C4C4C',
        'yt-700': '#212121',
        'yt-800': '#181818',
        'yt-900': '#121212',
      },
      spacing: {
        0.1: '1px',
        0.2: '2px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
