import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    typography: {
      DEFAULT: {
        css: {
          color: '#dadada',
          p: {
            color: '#dadada',
            marginBottom: '1rem',
          },
          strong: {
            color: '#dadada',
          },
          li: {
            listStyleType: 'disc',
          },
          h2: {
            margin: '2rem 0 1rem 0',
            fontSize: '1.5rem',
          }
        },
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
