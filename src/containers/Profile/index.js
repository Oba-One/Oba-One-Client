// REACT IMPORTS
import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import { Router } from '@reach/router';

import UserProvider from '../../providers/user';

import { Container } from '../../components/global';

const Sidebar = lazy(() => import('../../components/profile/Sidebar'));

const Main = styled.div`
	width: 75%;
	height: 100%;
	display: flex;
	justify-content: center;
	padding-top: 7%;
	border: 2px dotted beige;
	overflow: visible;
`;

const StyledContainer = styled(Container)`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100vh;
	border: 3px solid red;
	margin-top: 60px;
`;

const Profile = () => {
	return (
		<UserProvider>
			<StyledContainer>
				<Suspense fallback={<div>loading...</div>}>
					<Sidebar />
					<Main>
						<Router>
							<div path="/user">Profile</div>

							<div path="/profile/account">Account</div>
						</Router>
					</Main>
				</Suspense>
			</StyledContainer>
		</UserProvider>
	);
};

export default Profile;
