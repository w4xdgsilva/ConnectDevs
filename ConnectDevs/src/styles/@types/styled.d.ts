import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		fonts: {
			primary: string
		}
		colors: {
			primary: string
			secondary: string
			gray100: string
			gray70: string
			gray50: string
			gray30: string
			gray10: string
			gray0: string
			white: string
			feedback: {
				negative: string
				warning: string
				sucess: string
				information: string
			}
		}
	}
}
