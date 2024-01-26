const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        "2xl": "1400px",
      },
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".place-center": {
          "align-items": "center",
          "justify-content": "center",
        },
        ".place-between": {
          "align-items": "center",
          "justify-content": "space-between",
        },
        ".truncate ": {
          "text-overflow": "ellipsis",
          overflow: "hidden",
          "white-space": "nowrap",
        },
      })
    }),
    plugin(function ({ addVariant }) {
      addVariant("link", "& a")
    }),
    plugin(function ({ addVariant }) {
      addVariant("icon", "& .icon")
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          sz: (value) => ({
            height: value,
            width: value,
          }),
        },
        { values: theme("spacing") }
      )
    }),
  ],
}
