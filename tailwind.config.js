/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-extrabold": ["Rubik-ExtraBold", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-semibold": ["Rubik-SemiBold", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serif"],
        poppins: ["Poppins-Regular", "sans-serif"],
        "poppins-bold": ["Poppins-Bold", "sans-serif"],
        "poppins-extrabold": ["Poppins-ExtraBold", "sans-serif"],
        "poppins-medium": ["Poppins-Medium", "sans-serif"],
        "poppins-semibold": ["Poppins-SemiBold", "sans-serif"],
        "poppins-light": ["Poppins-Light", "sans-serif"],
        "poppins-thin": ["Poppins-Thin", "sans-serif"],
        "poppins-extralight": ["Poppins-ExtraLight", "sans-serif"],
      },
      colors: {
        // primary: {
        //    100: "#0061FF0A",
        //    200: "#0061FF1A",
        //    300: "#0061FF",
        // },
        primary: "#7C3AED"
      },
    },
    plugins: [],
  }
}