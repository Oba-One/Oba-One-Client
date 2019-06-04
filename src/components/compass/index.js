import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AirLink from './Air';
import WaterLink from './Water';
import EarthLink from './Earth';
import HomeLink from './Home';

const NavContainer = styled(Card)`
	position: fixed;
	left: 50%;
	bottom: 0;
	transform: translate(-50%, -30px);
	width: 50%;
	height: 70px;
	border-radius: ${({ theme }) => theme.border.radiusSm};
	will-change: transform;
	@media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
		width: 100%;
		transform: translate(-50%, 0);
		border-radius: 0;
	}
`;

const Navigation = styled(BottomNavigation)`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
	background: ${({ theme }) => theme.app.color.alternate};
`;

const Compass = ({ location }) => {
	const [page, setPage] = useState('home');
	const handleChange = newPage => {
		setPage(newPage);
	};

	const isLanding = location.pathname === '/landing';
	if (isLanding) {
		return null;
	}

	return (
		<NavContainer>
			<Navigation value={page} onChange={() => handleChange()}>
				<BottomNavigationAction label="Home" value="home" icon />
				<BottomNavigationAction label="Earth" value="earth" icon />
				<BottomNavigationAction label="Air" value="air" icon />
				<BottomNavigationAction label="Water" value="water" icon />
			</Navigation>
		</NavContainer>
	);
};

export default withRouter(Compass);
