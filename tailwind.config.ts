import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
        // Renamed original sidebar to prd-sidebar to avoid conflict if 'sidebar' is used generally
        // and to match the variable naming convention for specific components like PRD's sidebar.
        // However, the CSS uses --sidebar-background etc. which is fine.
        // The original config.ts had 'sidebar:' key, so we update its contents.
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
        // PRD specific color names mapping
        'prd-background': 'hsl(var(--background))', // explicit name for PRD background #F3F3F9
        'surface': 'hsl(var(--card))', // PRD surface #FFFFFF
        'primary-text': 'hsl(var(--foreground))', // PRD primaryText #212529
        'secondary-text': 'hsl(var(--muted-foreground))', // PRD secondaryText #878A99
        'accent-blue': 'hsl(var(--primary))', // PRD accentBlue #405189
        'accent-red': 'hsl(var(--destructive))', // PRD accentRed #E94A35
        'accent-green': 'hsl(var(--chart-green))', // PRD accentGreen #10B981
        'accent-yellow': 'hsl(var(--chart-yellow))', // PRD accentYellow #F59E0B
        'accent-purple': 'hsl(var(--chart-purple))', // PRD accentPurple #8B5CF6
			},
			borderRadius: {
				lg: 'var(--radius)', // 0.5rem (8px)
				md: 'calc(var(--radius) - 2px)', // 0.375rem (6px) - PRD Default
				sm: 'calc(var(--radius) - 4px)' // 0.25rem (4px)
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
