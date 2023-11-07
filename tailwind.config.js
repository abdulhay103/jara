/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            large: { max: "1600px" },
            middle: { max: "1040px" },
            small: { max: "768px" },
        },
        fontFamily: {
            roboto: ["Roboto", "sans-serif"],
            syne: ["Syne", "sans-serif"],
        },
        extend: {
            colors: {
                "main-color": "var(--main-color)",
                "heading-color": "var(--heading-color)",
                "main-gradient": "var(--main-gradient)",
            },
        },
    },
    plugins: [],
};
