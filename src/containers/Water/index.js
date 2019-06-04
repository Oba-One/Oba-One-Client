// REACT IMPORTS
import React from 'react';
import styled from 'styled-components';

import { Container, Grid, DevicePane } from '../../components/global';

const WaterGrid = styled(Grid)``;

const Water = () => {
	return (
		<Container>
			<WaterGrid>
				<DevicePane />
			</WaterGrid>
		</Container>
	);
};

export default Water;
