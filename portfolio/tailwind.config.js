const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: "class",
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        extend: {
            colors: {
                lightYellow: "#F8D862",
                lightBlue: "#92BADD",
                lightGray: "#F5F5F5",
                lightBlack: "#343233",
            },
            fontFamily: {
                inria: ['"Inria Sans Regular"', ...defaultTheme.fontFamily.sans],
                inriaLightItalic: ['"Inria Sans Light"', ...defaultTheme.fontFamily.sans],
                inriaBoldItalic: ['"Inria Bold Light"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require("@headlessui/tailwindcss")],
};
