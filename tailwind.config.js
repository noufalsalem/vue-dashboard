export default {
darkMode: "class",
content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{css,scss}",
    "./components/**/*.{vue,js,ts}",
],
theme: {
    extend: {
        transitionProperty: {
            width: 'width',
        },
        colors: {
            light: {
            DEFAULT: "#ffffff",
            },
            dark: {
            DEFAULT: "#1a1a1a",
            },
        },
    },
},
purge: false,
plugins: [],
};
