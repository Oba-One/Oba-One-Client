// REACT IMPORTS
import React from 'react';
import styled from 'styled-components';

import DeviceProvider from '../../providers/device';
import EcosystemProvider from '../../providers/ecosystem';

import { Container, Grid } from '../../components/global';
import DevicePane from '../../components/device';

const AirGrid = styled(Grid)``;

const Air = () => {
	return (
		<Container>
			<AirGrid>
			<DevicePane/>
			</AirGrid>
		</Container>
	);
};

export default Air;
