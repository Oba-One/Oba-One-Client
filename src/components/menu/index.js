import React, { useState, lazy, Suspense } from 'react';
import { Location, Router } from '@reach/router';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DeviceProvider from '../../providers/device';
import EcosystemProvider from '../../providers/ecosystem';

import Dial from './Dial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import {
	DeathStarIcon,
	FourGIcon,
	PlusIcon,
	ThreeGIcon,
} from '../../assets/svgs';

const DevicesDialog = lazy(() => import('./Devices'));
const NewDeviceDialog = lazy(() => import('./NewDevice'));
const QuickConnectDialog = lazy(() => import('./QuickConnect'));
const SettingsDialog = lazy(() => import('./Settings'));

const Container = styled.div`
	position: fixed;
	bottom: 150px;
	right: 100px;
`;

const FloatingMenu = () => {
	const [open, setOpen] = useState({
		settings: false,
		devices: false,
		quickConnect: false,
		newDevice: false,
	});

	const openDialog = (dialog = '') => {
		setOpen({
			...open,
			[dialog]: true,
		});
	};

	const closeDialog = (dialog = '') => {
		setOpen({
			...open,
			[dialog]: false,
		});
	};

	return (
		<EcosystemProvider>
			<DeviceProvider>
				<Location>
					{({ location }) => {
						console.log(location);

						const isEcosystem =
							location.pathname === '/air' ||
							location.pathname === '/earth' ||
							location.pathname === '/water';

						if (!isEcosystem) {
							return null;
						}
						return (
							<Container>
								<Suspense fallback={<div>Load</div>}>
									<Dial>
										<SpeedDialAction
											tooltipTitle="Settings"
											tooltipPlacement="left"
											onClick={() => openDialog('settings')}
											icon={<DeathStarIcon />}
										/>
										<SpeedDialAction
											tooltipTitle="Devices"
											tooltipPlacement="left"
											onClick={() => openDialog('devices')}
											icon={<FourGIcon />}
										/>
										<SpeedDialAction
											tooltipTitle="Quick Connect"
											tooltipPlacement="left"
											onClick={() => openDialog('quickConnect')}
											icon={<PlusIcon />}
										/>
										<SpeedDialAction
											tooltipTitle="New Device"
											tooltipPlacement="left"
											onClick={() => openDialog('newDevice')}
											icon={<ThreeGIcon />}
										/>
									</Dial>
									<DevicesDialog
										open={open.devices}
										handleClose={() => closeDialog('devices')}
									/>
									<NewDeviceDialog
										open={open.newDevice}
										handleClose={() => closeDialog('newDevice')}
									/>
									<QuickConnectDialog
										open={open.quickConnect}
										handleClose={() => closeDialog('quickConnect')}
									/>
									<SettingsDialog
										open={open.settings}
										handleClose={() => closeDialog('settings')}
									/>
								</Suspense>
							</Container>
						);
					}}
				</Location>
			</DeviceProvider>
		</EcosystemProvider>
	);
};

export default FloatingMenu;
