// REACT IMPORTS
import React from 'react';
import styled from 'styled-components';

import DevicePane from '../../components/containers/water/DevicePane';

import { Container, Grid } from '../../components/global';

const WaterGrid = styled(Grid)``;

const Water = () => {
	return (
		<Container>
			<WaterGrid>
				<DevicePane/>
			</WaterGrid>
		</Container>
	);
};

export default Water;
