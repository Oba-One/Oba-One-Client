// REACT IMPORTS
import React from 'react';

import { Container, Grid } from '../../components/global';

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
