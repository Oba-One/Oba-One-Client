// REACT IMPORTS
import React from 'react';
import styled from 'styled-components';

import DeviceProvider from '../../providers/device';
import EcosystemProvider from '../../providers/ecosystem';


import { Container, Grid, } from '../../components/global';
import DevicePane from '../../components/device';

const EarthGrid = styled(Grid)``;

const Earth = () => {
	return (
		<Container>
			<EarthGrid>
				<DevicePane/>
			</EarthGrid>
		</Container>
	);
};

export default Earth;
