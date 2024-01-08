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
      colors:{
        'playin-green': '#49FFA4',
        'playin-blue': '#17C8FF',
        'playin-purple': '#7D3D96',
        'playin-gold': '#C9A623',
        'playin-danger': '#E61C53'
      }
    },
  },
  plugins: [],
}
export default config
