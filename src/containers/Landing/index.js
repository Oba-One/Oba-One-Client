// REACT IMPORTS
import React from 'react';

import UserProvider from '../../providers/user';

import Background from '../../components/landing/Background';
import Login from '../../components/landing/Login';

const Landing = () => {
	return (
		<UserProvider>
			<Background>
				<Login />
			</Background>
		</UserProvider>
	);
};

export default Landing;
