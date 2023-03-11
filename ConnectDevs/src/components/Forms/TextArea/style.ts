import styled from "styled-components"

export const StyledFieldset = styled.fieldset`
	width: 100%;

	label {
		font-family: 'Nunito', sans-serif;
		font-size: 0.875rem;
		font-weight: 400;
	}

	p {
		color: ${({ theme }) => theme.colors.white};
	}
`
