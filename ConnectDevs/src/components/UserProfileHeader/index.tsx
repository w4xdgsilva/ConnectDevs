import React from 'react'
import { StyledUserContainer } from './style'
import { StyledTitle } from '../../styles/typography'

export const UserProfileHeader = () => {
    const userInfo = JSON.parse(
        localStorage.getItem('@CONNECTDEVS:USER') || 'null'
    );

    return (
        <StyledUserContainer>
            <div>
                <StyledTitle
                    tag='h2'
                    $fontSize='one'
                    textAlign='center'
                >
                    {userInfo.name.charAt(0)}
                </StyledTitle>
                <StyledTitle
                    tag='h3'
                    $fontSize='one'
                    textAlign='center'
                >
                    {userInfo.name}
                </StyledTitle>
            </div>
        </StyledUserContainer>
    )
}