import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        dancingScript: ['var(--font-dancing-script)'],
        billabong: ['var(--font-billabong)'],
      },
      boxShadow: {
        '3xl': '10px 0 30px -5px rgba(0, 0, 0, 0.5), -10px 0 30px -5px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
export default config
