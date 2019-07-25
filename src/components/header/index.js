import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Location } from '@reach/router';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useResizeObserver from '../../helpers/useResizeObserver';

import Profile from './Profile';
import Logo from './Logo';

const AnimatedHeader = styled(animated.header)`
	position: fixed;
	display: flex;
	z-index: 1007;
	align-items: center;
	justify-content: space-between;
	padding: 0 27px;
	width: 100%;
	height: 60px;
	background: ${({ theme }) => theme.app.color.primary};
	box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
	border-bottom: solid 1px #dadce0;
	will-change: opacity transform;
`;

const Header = ({}) => {
	const isTablet = useResizeObserver() <= 920;

	const animationStyle = useSpring({});

	return (
		<Location>
			{({ location }) => {
				const isLanding = location.pathname === '/landing';
				const isHome = location.pathname === '/home';

				if (isLanding || (!isHome && isTablet)) {
					return null;
				}
				return (
					<AnimatedHeader style={animationStyle}>
						<Logo />
						<Profile />
					</AnimatedHeader>
				);
			}}
		</Location>
	);
};

export default Header;
