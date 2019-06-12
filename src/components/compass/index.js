import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// PROVIDERS
import UserProvider from '../../providers/user';
import DeviceProvider from '../../providers/device';

// GLOBAL & DEVICE NAVIGATION
import { AirLink, WaterLink, EarthLink, HomeLink } from './Global';
import {
	DeviceLink,
	DashboardLink,
	StreamLink,
	RemoteLink,
	SettingsLink,
} from './Device';

const NavWrapper = styled(Card)`
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
`;

const Link = styled(BottomNavigationAction)``;

const Compass = ({ location }) => {
	const [nav, setNav] = useState('global');
	const [page, setPage] = useState('home');
	const handleChange = newPage => {
		setPage(newPage);
	};

	const isLanding = location.pathname === '/landing';
	if (isLanding) {
		return null;
	}

	return (
		<UserProvider>
			<DeviceProvider>
				<NavWrapper>
					<Navigation value={page} onChange={handleChange}>
						{nav === 'device' ? (
							<>
								<Link
									label="Dashboard"
									value="dashboard"
									icon={<DashboardLink />}
								/>
								<Link label="Stream" value="stream" icon={<StreamLink />} />
								<Link label="Settings" value="settings" icon={<DeviceLink />} />
								<Link label="Remote" value="remote" icon={<RemoteLink />} />
								<Link
									label="Settings"
									value="settings"
									icon={<SettingsLink />}
								/>
							</>
						) : (
							<>
								<Link label="Home" value="home" icon={<HomeLink />} />
								<Link label="Earth" value="earth" icon={<EarthLink />} />
								<Link label="Water" value="water" icon={<WaterLink />} />
								<Link label="Air" value="air" icon={<AirLink />} />
							</>
						)}
					</Navigation>
				</NavWrapper>
			</DeviceProvider>
		</UserProvider>
	);
};

export default withRouter(Compass);
