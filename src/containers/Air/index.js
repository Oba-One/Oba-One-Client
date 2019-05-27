// REACT IMPORTS
import React from 'react';
import styled from 'styled-components';

import { Container, Grid } from '../../components/global';

import DevicePane from '../../components/containers/air/DevicePane';


const AirGrid = styled(Grid)``;

const Air = () => {
	return (
		<Container>
			<AirGrid>
				<div>Device Pane </div>
			</AirGrid>
		</Container>
	);
};

export default Air;
