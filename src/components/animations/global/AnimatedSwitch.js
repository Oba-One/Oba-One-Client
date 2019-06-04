import React from 'react'
import { Switch } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';
import useRouter from '../../../helpers/useRouter';

const RouteContainer = styled(animated.section)``;

const AnimatedSwitch = () => {
	const { location } = useRouter();

	const transitions = useTransition(location, location => location.pathname, {
		from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
		enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
		leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
	});

	return transitions.map(({ item, props, key }) => (
		<RouteContainer key={key} style={props}>
			<Switch location={item} />
		</RouteContainer>
	));
};

export default AnimatedSwitch;
