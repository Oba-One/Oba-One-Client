// REACT IMPORTS
import React from 'react';
import styled from 'styled-components';

import { Container, Grid, DevicePane } from '../../components/global';

const EarthGrid = styled(Grid)``;

const Earth = () => {
	return (
		<Container>
			<EarthGrid>
				<DevicePane />
			</EarthGrid>
		</Container>
	);
};

export default Earth;
