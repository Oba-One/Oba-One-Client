import React, { useContext} from 'react';
import styled from 'styled-components';
import DeviceContext from '../../providers/device/context';

const Wrapper = styled.div`
    display: block;
    position: relative;
    min-width: 100%;
    min-height: 100vh;
    overflow: hidden;
    z-index: 27;
    opacity: 1;
    background: ${({background}) => background};
    will-change: opacity transform;
`;

const Pane = ({ ecosystem = {} }) => {

    const device = useContext(DeviceContext)
	return <Wrapper
        background={background}
        animateOpacity={animateOpacity}
        transitionState={transitionState}
    ></Wrapper>;
};

export default Pane;