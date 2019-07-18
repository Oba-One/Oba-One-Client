// REACT IMPORTS
import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';

import DeviceProvider from '../../providers/device';

import { Container, Grid } from '../../components/global';

const Activity = lazy(() => import('../../components/devices/Activity'));
const Table = lazy(() => import('../../components/devices/Table'));

const DevicesContainer = styled(Container)`
	height: 100vh;
	overflow: visible;
`;

const DevicesGrid = styled(Grid)`
	width: 100%;
	border: 1px dotted red;
	margin-top: 100px;
	grid-template-areas:
		'table table table table activity activity'
		'table table table table activity activity'
		'table table table table activity activity';
`;

const Devices = () => {
	return (
		<DeviceProvider>
			<DevicesContainer>
				<Suspense fallback={<div>Loading...</div>}>
					<DevicesGrid>
						<Activity />
						<Table />
						<div>History</div>
						<div>Map</div>
					</DevicesGrid>
				</Suspense>
			</DevicesContainer>
		</DeviceProvider>
	);
};

export default Devices;
