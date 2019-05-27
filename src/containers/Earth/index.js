// REACT IMPORTS
import React from 'react';
import styled from 'styled-components';

import { Container, Grid } from '../../components/global';

import DevicePane from '../../components/containers/earth/DevicePane';


const EarthGrid = styled(Grid)``;

const Earth = () => {
	return (
		<Container>
			<EarthGrid>
				<div>Device Pane </div>
			</EarthGrid>
		</Container>
	);
};

export default Earth;
