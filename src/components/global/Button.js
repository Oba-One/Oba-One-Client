import React from 'react'
import styled from 'styled-components';
import { Button as MaterialButton } from '@material-ui/core';

const StyledButton = styled(MaterialButton)`

`;

const Button = ({ children, className}) => (
    <StyledButton
        className={className}>
        {children}
    </StyledButton>
)

export default Button;

