module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}', './**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
