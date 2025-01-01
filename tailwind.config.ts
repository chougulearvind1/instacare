
import { mtConfig } from "@material-tailwind/react";
import type { Config } from "tailwindcss";

export default {
  mode: 'jit',
  // safelist: ['[&_data-slot="icon"]:h-5','[&_data-slot=icon]:h-5'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/@material-tailwind/react/src/components/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/@material-tailwind/react/src/theme/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/@material-tailwind/react/dist/components/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/@material-tailwind/react/dist/theme/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [mtConfig],
} satisfies Config;
