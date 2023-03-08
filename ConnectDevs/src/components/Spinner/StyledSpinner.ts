import styled from "styled-components"
import { ImSpinner } from "react-icons/im"

const StyledSpinner = styled(ImSpinner)`
    width: 1.25rem;
    height: 1.25rem;
    animation: loading 0.8s linear infinite;

    @keyframes loading {
        to {
            transform: rotate(360deg);
        }
    }
`

export default StyledSpinner