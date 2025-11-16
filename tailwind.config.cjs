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
        },
    },
    plugins: [],
}
