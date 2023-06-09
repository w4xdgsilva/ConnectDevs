import { keyframes } from 'styled-components'

export const AnimationSpin = keyframes`
	to {
    transform: rotate(360deg);
  }
`

export const AnimationFadeIn = keyframes`
	from {
		transform: translateY(50px);
		opacity: 0;
	} to {
		transform: translateY(0);
		opacity: 1;
	}
`
