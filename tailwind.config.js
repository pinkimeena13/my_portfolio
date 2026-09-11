/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
          soft: '#EFF6FF',
        },
        accent: {
          start: '#3B82F6',
          end: '#5B7CFA',
        },
        sky: { soft: '#DCEEFF' },
        lavender: { soft: '#DDE5FF' },
        canvas: '#FCFBF8',
        card: '#FFFFFF',
        ink: {
          DEFAULT: '#0F172A',
          muted: '#475569',
          subtle: '#64748B',
          faint: '#94A3B8',
        },
        hairline: '#E5EAF4',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // 8px-grid driven scale from the design system
        caption: ['0.875rem', { lineHeight: '1.5' }],   // 14px
        body: ['1.125rem', { lineHeight: '1.7' }],      // 18px
        'card-title': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],   // 24px
        'section-title': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }], // 48px
        hero: ['4.5rem', { lineHeight: '1.04', letterSpacing: '-0.035em' }],         // 72px
      },
      borderRadius: {
        card: '20px',
        pill: '9999px',
      },
      spacing: {
        section: '120px',
        card: '32px',
        btn: '52px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(17,24,39,0.04), 0 8px 24px -12px rgba(17,24,39,0.10)',
        lift: '0 2px 4px rgba(17,24,39,0.04), 0 24px 48px -20px rgba(37,99,235,0.22)',
        glass: '0 8px 32px -12px rgba(17,24,39,0.16)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
