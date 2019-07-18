import React, { useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { Location, navigate } from '@reach/router';
import { BottomNavigation, BottomNavigationAction, Card} from '@material-ui/core';
import {
	FireIcon,
	EarthIcon,
	WavesIcon,
	HomeIcon,
	FiveGIcon,
	CannabisIcon,
	RocketIcon,
	WifiIcon,
} from '../../assets/svgs';

// PROVIDERS
import UserProvider from '../../providers/user';
import DeviceProvider from '../../providers/device';

const AnimatedWrapper = styled(animated(Card))`
	position: fixed;
	z-index: 1007;
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
	height: 100% !important;
`;

const Link = styled(BottomNavigationAction)`
	height: 100%;
`;

const Compass = () => {
	const [nav, setNav] = useState('global');
	const [page, setPage] = useState('home');

	const handleChange = (event, newPage) => {
		setPage(newPage);
		navigate(`/${newPage}`);
	};

	return (
		<UserProvider>
			<DeviceProvider>
				<Location>
					{({ location }) => {
						const isLanding = location.pathname === '/landing';
						const isProfile = location.pathname === '/profile'
						const isDevices = location.pathname === '/devices'
						if (isLanding || isProfile || isDevices) {
							return null;
						}
						return (
							<AnimatedWrapper>
								{nav === 'device' ? (
									<Navigation value={page} onChange={handleChange}>
										<Link
											label="Dashboard"
											value="dashboard"
											icon={<RocketIcon />}
										/>
										<Link
											label="Stream"
											value="stream"
											icon={<WifiIcon />}
										/>
										<Link
											label="Settings"
											value="settings"
											icon={<FiveGIcon/>}
										/>
										<Link
											label="Remote"
											value="remote"
											icon={<CannabisIcon />}
										/>
									</Navigation>
								) : (
									<Navigation value={page} onChange={handleChange}>
										<Link
											value="home"
											label="Home"
											icon={<HomeIcon />}
										/>
										<Link
											value="air"
											label="Air"
											icon={<FireIcon />}
										/>
										<Link
											value="earth"
											label="Earth"
											icon={<EarthIcon />}
										/>
										<Link
											value="water"
											label="Water"
											icon={<WavesIcon />}
										/>
									</Navigation>
								)}
							</AnimatedWrapper>
						);
					}}
				</Location>
			</DeviceProvider>
		</UserProvider>
	);
};

export default Compass;
