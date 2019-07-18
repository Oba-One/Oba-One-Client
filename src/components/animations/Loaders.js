import React from 'react'
import styled from 'styled-components';
import Loader from 'react-loaders';
import {Container} from '../global'

const StyledContainer = styled(Container)`
    display: flex;
    justify-content:  center;
    align-items:  center;
`

const StyledLoader = styled(Loader)`
    width: 100px;
    height: 100px;
`

const RouteLoader = () => {
    return (
        <StyledContainer>
            <StyledLoader type="ball-scale-ripple-multiple" />
        </StyledContainer>
    )
}

export {
    RouteLoader
}