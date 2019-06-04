// REACT IMPORTS
import React from 'react';
import styled from 'styled-components';

import { Container, Grid, DevicePane } from '../../components/global';

const AirGrid = styled(Grid)``;

const Air = () => {
	return (
		<Container>
			<AirGrid>
			<DevicePane />
			</AirGrid>
		</Container>
	);
};

export default Air;
