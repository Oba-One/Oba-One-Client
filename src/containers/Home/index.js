// REACT IMPORTS
import React from 'react';

import { Container, Grid } from '../../components/global';

const HomeGrid = styled(Grid)``;

const Home = () => {
	return (
		<Container>
			<HomeGrid>
				<div>Last Session</div>
				<div>Activity List</div>
				<div>Image Gallery</div>
				<div>Youtube Feed</div>
			</HomeGrid>
		</Container>
	);
};

export default Home;
