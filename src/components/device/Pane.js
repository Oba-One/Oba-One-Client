import React, { useContext} from 'react';
import styled from 'styled-components';
import DeviceContext from '../../providers/device/context';

const Wrapper = styled.div`
    display: flex;
    position: relative;
    min-width: 100%;
    height: 100vh;
    overflow: hidden;
    opacity: 1;
    background: ${({background}) => background};
    will-change: opacity, transform;
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        margin-bottom: 70px;
        height: calc(100vh - 70px);
	}
`;

const Pane = ({children, ecosystem = {}, background, animateOpacity, transitionState }) => {

    const device = useContext(DeviceContext)
	return <Wrapper
        device={device}
        background={background}
        animateOpacity={animateOpacity}
        transitionState={transitionState}
    >
        {children}
    </Wrapper>;
};

export default Pane;