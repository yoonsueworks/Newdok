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
        "beige-10": "#F7EFE5",
        "beige-20": "#FFFBF5",
        "purple-10": "#C3ACD0",
        "purple-20": "#8B69B2",
        "purple-30": "#674188",
        "purple-40": "#542975",
        "purple-50": "#391354",
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
      },
    },
  },
  plugins: [],
};
