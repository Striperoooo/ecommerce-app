const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                // add the Manrope font (loaded from index.html) as the default sans stack
                sans: ['Manrope', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                D8: '#D87D4A',
                FBAF85: '#ff6b35',
                1010: '#101010',
                F1F1: '#F1F1F1',
                FAFA: '#FAFAFA'
            }
        },
    },
    plugins: [],
}
