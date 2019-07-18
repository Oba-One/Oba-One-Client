import React, { useState } from 'react';
import { Router, Location } from '@reach/router';
import { useTransition, animated } from 'react-spring';
import { Container } from '../global';
import styled from 'styled-components';

const AnimatedContainer = styled(animated(Container))`
	width: 100%;
`;

const AnimatedRouter = ({ children }) => {
	const [index, set] = useState(0);
	const transitions = useTransition(index, p => p, {
		from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
		enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
		leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
	});

	return (
		<Location>
			{({ location }) => <Router location={location}>{children}</Router>}
		</Location>
	);
};

export default AnimatedRouter;
