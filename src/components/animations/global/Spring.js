import React from 'react';
import { useSpring, animated } from 'react-spring';
import  styled from 'styled-components';

const animatedElement = (element = {}) => {
	const AnimatedElement = styled(animated[element])``;
	return AnimatedElement
}


const spring = (animation = {}) => {
	const animatedStyle = useSpring(animation);

	return <animated.div style={animatedStyle} />;
};

export default spring;
