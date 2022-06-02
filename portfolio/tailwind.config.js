module.exports = {
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
        },
    },
    plugins: [],
};
