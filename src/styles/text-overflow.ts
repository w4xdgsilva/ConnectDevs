import { css } from 'styled-components'

interface ITextOverflowProps {
    rowWidth?: number;
    rowAmount: number;
}

export const TextOverflowCSS = css<ITextOverflowProps>`
    display: -webkit-box;
    -webkit-line-clamp: ${({ rowAmount }) => rowAmount};
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;

    ${({ rowWidth }) => rowWidth && css`
        max-width: ${rowWidth}px;
    `}
`