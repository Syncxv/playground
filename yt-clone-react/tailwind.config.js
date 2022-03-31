module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto-fit': 'repeat(auto-fit, minmax(19rem, .1fr))'
            },
            colors: {
                'yt-400': '#696972',
                'yt-500': '#4C4C4C',
                'yt-700': '#212121',
                'yt-800': '#181818',
                'yt-900': '#121212'
            },
            spacing: {
                0.1: '1px',
                0.2: '2px'
            }
        }
    },
    plugins: []
}
