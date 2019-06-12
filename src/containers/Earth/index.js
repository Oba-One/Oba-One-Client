// REACT IMPORTS
import React from 'react';
import styled from 'styled-components';

import DeviceProvider from '../../providers/device';
import EcosystemProvider from '../../providers/ecosystem';

import { Container } from '../../components/global';
import DevicePane from '../../components/device';

const Earth = () => {
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

export default Earth;
