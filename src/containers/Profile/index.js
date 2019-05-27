// REACT IMPORTS
import React from 'react';
import styled from 'styled-components';

import { Container, Grid } from '../../components/global';

import Avatar from '../../components/global/Avatar';
import Navigation from '../../components/containers/profile/Navigation';
import Settings from '../../components/containers/profile/Settings';

const ProfileGrid = styled(Grid)``;

const Profile = () => {
	return (
		<Container>
			<ProfileGrid>
				<div>Setting Navigation</div>
				<div>Avatar</div>
				<div>Settings</div>
			</ProfileGrid>
		</Container>
	);
};

export default Profile;
