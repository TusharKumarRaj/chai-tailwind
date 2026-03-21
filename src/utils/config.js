const spacing = {};

for (let i = 0; i <= 20; i++) {
  spacing[i] = `${i * 4}px`; 
}

export const config = {
  spacing,

  colors: {
      red: {
      100: "#fee2e2", 
      300: "#fca5a5",
      500: "#ef4444",
      700: "#b91c1c"
    },

    blue: {
      100: "#dbeafe",
      300: "#93c5fd",
      500: "#3b82f6",
      700: "#1d4ed8"
    },

    green: {
      100: "#dcfce7",
      300: "#86efac",
      500: "#22c55e",
      700: "#15803d"
    },

    yellow: {
      100: "#fef9c3",
      300: "#fde047",
      500: "#eab308",
      700: "#a16207"
    },

    purple: {
      100: "#f3e8ff",
      300: "#d8b4fe",
      500: "#a855f7",
      700: "#7e22ce"
    },

    pink: {
      100: "#fce7f3",
      300: "#f9a8d4",
      500: "#ec4899",
      700: "#be185d"
    },

    black: "black",
    white: "white"
  },

  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "32px",
    "5xl": "40px"
  },

  borderRadius: { 
    none: "0px",
    sm: "4px",
    DEFAULT: "8px", 
    md: "10px",
    lg: "12px",
    xl: "16px",
    full: "9999px"
  },

  shadows: {
    sm: "0 1px 3px rgba(0,0,0,0.1)",
    DEFAULT: "0 4px 10px rgba(0,0,0,0.1)",
    md: "0 6px 20px rgba(0,0,0,0.15)",
    lg: "0 10px 30px rgba(0,0,0,0.2)"
  }
};