import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { StarIcon } from '../../assets/svgs/';

const Wrapper = styled(animated.div)`
	position: absolute;
	z-index: 20;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -100%);
	width: 300px;
	height: 160px;
	text-align: center;
`;

const Init = ({ icon = () => <div></div>, ecosytem = '', newUser = true }) => {
	return (
		<Wrapper>
			{newUser ? (
				<h4>
					Get Started,
					<br />
					Connect Your First Device!
				</h4>
			) : (
				<h4>
					Welcome Back,
					<br />
					You Know What's Up!
				</h4>
			)}
			<StarIcon/>
			{icon()}
		</Wrapper>
	);
};

export default Init;
