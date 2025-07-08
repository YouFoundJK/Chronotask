/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/renderer/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // We are putting our colors inside `extend` so we can still use
    // default Tailwind colors like `bg-red-500` if we need them.
    extend: {
      colors: {
        // You can use a color picker to get the exact hex codes,
        // but these are very close approximations based on the screenshots.
        'primary': '#1E1E1E',   // The darkest background
        'surface': '#2D2D2D',   // Calendar grid and panels
        'border': '#4A4A4A',    // Borders and dividing lines
        'text-primary': '#E0E0E0',   // Main text color
        'text-secondary': '#8A8A8A', // Muted text for times, etc.

        'accent': {
          'purple': '#8E44AD', // Primary accent for events and selected buttons
          'green': '#27AE60',  // Secondary accent for specific events
          'yellow': '#F1C40F', // Accent for the main date title
        },
      }
    },
  },
  plugins: [],
}