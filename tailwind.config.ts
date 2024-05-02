import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#9e9ee7',
        customGray: '#808080',
      },
      fontFamily: {
        im_fell: ['var(--font-im_fell)'],
      },
    },
  },
  plugins: [],
}
export default config
