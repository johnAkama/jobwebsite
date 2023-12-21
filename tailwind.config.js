/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                blueColor: '#f13f88',
                greyIsh: '#eef1f5',
                cardShadow: '#f7f8f9',
                textColor: '#252b36',
            },
        },
    },
    plugins: [],
};
