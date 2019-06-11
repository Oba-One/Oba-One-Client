// REACT IMPORTS
import React from 'react';
import styled from 'styled-components';

import DeviceProvider from '../../providers/device';
import EcosystemProvider from '../../providers/ecosystem';

import { Container } from '../../components/global';
import DevicePane from '../../components/device';

const WaterGrid = styled(Grid)``;

const Water = () => {
	return (
		<EcosystemProvider>
			<DeviceProvider>
				<Container>
					<DevicePane />
				</Container>
			</DeviceProvider>
		</EcosystemProvider>
	);
};

export default Water;
