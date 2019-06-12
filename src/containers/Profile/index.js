// REACT IMPORTS
import React from 'react';
import styled from 'styled-components';

import UserProvider from '../../providers/user';

import { Container, Grid } from '../../components/global';

import Avatar from '../../components/global/Avatar';
import Navigation from '../../components/profile/Navigation';
import Settings from '../../components/profile/Settings';

const ProfileGrid = styled(Grid)``;

const Profile = () => {
	return (
		<UserProvider>
			<Container>
				<ProfileGrid>
					<div>Setting Navigation</div>
					<div>Avatar</div>
					<div>Settings</div>
				</ProfileGrid>
			</Container>
		</UserProvider>
	);
};

export default Profile;
