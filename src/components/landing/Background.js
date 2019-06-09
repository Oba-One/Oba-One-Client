import React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import Galaxy from '../../assets/images/stars.jpg'

const Space = styled(animated.div)`
	position: relative;
	width: 100vw;
	height: 100vh;
	background: grey;
	overflow: hidden;
	scroll-behavior: smooth;
    background-image: url(${Galaxy});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;


`;

const Mask = styled(animated.div)`
	width: 100vw;
	height: 100vh;
    filter: opacity(99%) saturate(100%);
`;

const Background = ({ children }) => {
	return (
		<Mask>
			<Space>{children}</Space>
		</Mask>
	);
};

export default Background;
