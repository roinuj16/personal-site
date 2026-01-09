import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'matrix-green': '#00FF88',
        'neon-cyan': '#00E0FF',
        'electric-blue': '#0496FF',
        'tech-teal': '#00C9A7',
        'cyber-mint': '#00FFC8',
        'deep-space': '#0A0E27',
        'void-black': '#050816',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'space': ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'tech-green-glow': '0 0 20px rgba(0, 255, 136, 0.6)',
        'tech-cyan-glow': '0 0 20px rgba(0, 224, 255, 0.6)',
      }
    }
  }
}
