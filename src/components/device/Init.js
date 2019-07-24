import React, { useContext } from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import EcosystemContext from '../../providers/ecosystem/context';
import DeviceContext from '../../providers/device/context';

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

const Init = ({ icon = () => <div />, newUser = true }) => {
	const ecosystem = useContext(EcosystemContext);
	const device = useContext(DeviceContext);

	console.log(ecosystem.setEcosystem( ));


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
			<StarIcon />
		</Wrapper>
	);
};

export default Init;
