import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Card } from '@material-ui/core';
import { useTransition, animated } from 'react-spring';
import UserContext from '../../providers/user';

import { Github, Google } from './Buttons';

const Comet = styled(animated.div)`
	position: absolute;
	z-index: 20;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 300px;
	height: 160px;
	background: inherit;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
	mix-blend-mode: screen;
`;

const StyledCard = styled(Card)`
	border-radius: 5px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #f9f9f9;
	mix-blend-mode: screen;

	&__h1 {
		margin: 0;
		padding: 0;
	}
`;

const Login = ({}) => {

	const user = useContext(UserContext);

	return (
		<Comet>
			<StyledCard>
				<Github />
				<Google />
			</StyledCard>
		</Comet>
	);
};

export default Login;
