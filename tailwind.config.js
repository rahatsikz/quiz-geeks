/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
              "accent": "#9a00ff",
                      
              "secondary": "#00c0d6",
                      
              "primary": "#00c0d6",
                      
              "neutral": "#080b00",
                      
              "base-100": "#fff7ff",
                      
              "info": "#00eeff",
                      
              "success": "#00ba59",
                      
              "warning": "#ff9500",
                      
              "error": "#ff99a7",
                      },
                    },
                  ],
                },
  plugins: [require("daisyui")],
};
