// REACT IMPORTS
import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';

import UserProvider from '../../providers/user';

import { Container, Grid } from '../../components/global';

// LAZY LOADED COMPONENTS
const Youtube = lazy(() => import('../../components/home/Youtube'));
const Spotify = lazy(() => import('../../components/home/Spotify'));
const Activity = lazy(() => import('../../components/home/Activity'));

const HomeGrid = styled(Grid)`
	padding-top: 60px;
	padding-bottom: 120px;
	grid-template-areas:
		'activity activity activity activity activity activity'
		'utube utube utube utube . .'
		'. . spotify spotify spotify spotify';
	@media (max-width: 920px) {
		padding-top: 0;
		grid-template-areas:
			'feed feed feed feed'
			'activity activity activity activity'
			'utube utube spotify spotify';
	}
	@media (max-width: 480px) {
		grid-template-areas:
			'feed feed '
			'activity activity'
			'utube utube '
			'spotify spotify'
			'profile profile';
	}
`;

const Home = () => {
	return (
		<UserProvider>
			<Suspense fallback={<div>loading section...</div>}>
				<Container>
					<HomeGrid>
						<Activity />
						<Youtube />
						<Spotify />
					</HomeGrid>
				</Container>
			</Suspense>
		</UserProvider>
	);
};

export default Home;
