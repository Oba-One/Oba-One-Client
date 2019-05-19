// REACT IMPORTS
import React from 'react';
import styled from 'styled-components';

import { Container, Grid } from '../../components/global';

const LandingGrid = styled(Grid)``;

const Landing = () => {
	return (
		<Container>
			<LandingGrid>
				<div>Animated Logo Flys In</div>
				<div>Round Shadow follows logo</div>
				<div>LogIn Box</div>
			</LandingGrid>
		</Container>
	);
};

export default Landing;
