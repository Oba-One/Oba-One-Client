import React from 'react';
import styled from 'styled-components';

const Pane = styled.div`
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

const DevicePane = ({ ecosystem = {} }) => {
	return <Pane
        background={background}
        animateOpacity={animateOpacity}
    >Air</Pane>;
};

export default DevicePane;
