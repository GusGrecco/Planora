const { colors, fontSize, spacing, borderRadius } = require("./src/theme/tokens");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors,
            fontSize,
            spacing,
            borderRadius,
        },
    },
    plugins: [],
};