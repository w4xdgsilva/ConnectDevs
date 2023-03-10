import styled from "styled-components"

export const StyledFieldset = styled.fieldset`
	width: 100%;
	position: relative;

	& > button {
		background-color: transparent;
		border: none;
		position: absolute;
		max-width: max-content;
		max-height: max-content;
		top: 1.25rem;
		right: 1.4331rem;
		transition: 0.5s;
		cursor: pointer;
		filter: invert(60%);
	}

	& > button > svg {
		width: 1.25rem;
		height: 1.25rem;
	}

	& > button:hover {
		filter: invert(90%);
	}
`
