// REACT IMPORTS
import React from 'react';
import styled from 'styled-components';

import { Container, Grid } from '../../components/global';

import Activity from '../../components/containers/home/Activity';
import ImageGallery from '../../components/containers/home/ImageGallery';
import YoutubeFeed from '../../components/containers/home/YoutubeFeed';


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
