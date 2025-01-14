import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
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
        '3xl':
          '10px 0 30px -5px rgba(0, 0, 0, 0.5), -10px 0 30px -5px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
