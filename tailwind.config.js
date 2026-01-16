/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Use class-based dark mode
  theme: {
    extend: {
      colors: {
        // Light theme colors (default)
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        // Dark theme colors
        dark: {
          bg: "#111827",
          card: "#1f2937",
          text: "#f3f4f6",
        },
        // Night theme colors
        night: {
          bg: "#0f172a",
          card: "#1e293b",
          text: "#e2e8f0",
        },
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};
