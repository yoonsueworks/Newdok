// import("tailwindcss").Config;

module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        0: "0",
        px: "1px",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem", //10
        3.25: "0.8125rem", //12
        3.5: "0.875rem", //14
        4: "1rem", //16
        5: "1.25rem", //20
        6: "1.5rem", //24
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem", //36
        10: "2.5rem", //40
        11: "2.75rem", //44
        12: "3rem", //48
        14: "3.5rem", //56
        16: "4rem", //64
        20: "5rem", //80
        31.25: "7.8125rem", //500
        32: "8rem", //128px
        36: "9rem", //144px
        40: "10rem", //160px
        44: "11rem", //176px
        48: "12rem", //192px
        52: "13rem", //208p
      },
      width: {
        58: "57px",
      },
      height: {
        58: "57px",
        156: "9.75rem",
        420: "26.25rem",
      },
      colors: {
        "beige-50": "#FFFBF5",
        "beige-100": "#F7EFE5",

        "purple-50": "#EFE7F2",
        "purple-100": "#D8C4E1",
        "purple-200": "#BF9ECE",
        "purple-300": "#A67AB9",
        "purple-400": "#9362A9",
        "purple-500": "#824E9A",
        "purple-600": "#774893",
        "purple-700": "#674188",
        "purple-800": "#593B7D",
        "purple-900": "#413166",

        "warmgray-10": "#F7F3F2",
        "warmgray-20": "#E5E0DF",
        "warmgray-30": "#CAC5C4",
        "warmgray-40": "#ADA8A8",
        "warmgray-50": "#8F8B8B",
        "warmgray-60": "#726E6E",
        "warmgray-70": "#565151",
        "warmgray-80": "#3C3838",
        "warmgray-90": "#272525",
        "warmgray-100": "#171414",

        warning: "#FFB802",
        error: "#F82148",
        success: "#00D46F",
        information: "#0080DC",
      },
    },
  },
  plugins: [],
};
