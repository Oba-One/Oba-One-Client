import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Avatar } from '../global';

import useResizeObserver from '../../helpers/useResizeObserver';

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

const Logo = styled.div``;

const Profile = styled.div``;

const Header = ({ location }) => {
	const isLanding = location.pathname === '/landing';
	const isTablet = useResizeObserver() <= 920;

	const animationStyle = useSpring({
		
	});

	if (isLanding || isTablet) {
		return null;
	}

	return (
		<AnimatedHeader style={animationStyle}>
			<Logo>Logo</Logo>
			<Profile>Profile</Profile>
		</AnimatedHeader>
	);
};

export default withRouter(Header);
