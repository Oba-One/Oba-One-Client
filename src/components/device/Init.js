import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

const Wrapper = styled(animated.div)``;

const Init = ({ icon = () => {}, ecosytem = ''}) => {
	return <Wrapper>Get Started {ecosytem}</Wrapper>;
};

export default Init;
