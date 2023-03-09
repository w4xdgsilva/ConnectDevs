import { TextField } from '@mui/material'
import styled from 'styled-components'

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 25px;
`

export const StyledTextField = styled(TextField)`
	width: 100%;
	
	input {
		background-color: ${({ theme }) => theme.colors.gray50};
		font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
		color: ${({ theme }) => theme.colors.white};
	}
	
	label {
		color: ${({ theme }) => theme.colors.white};
		
		&.Mui-focused {
			color: ${({ theme }) => theme.colors.white};
		}
	}
	
	fieldset {
		border-color: ${({ theme }) => theme.colors.gray50}!important;
		outline-color: ${({ theme }) => theme.colors.gray50}!important;
	}
	
	.Mui-focused {
		fieldset {
			border-color: ${({ theme }) => theme.colors.white}!important;
			outline-color: ${({ theme }) => theme.colors.white}!important;
		}
	}
`
