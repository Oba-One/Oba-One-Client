// REACT IMPORTS
import React from 'react';

import UserProvider from '../../providers/user';


import Background from '../../components/landing/Background';
import Login from '../../components/landing/Login';

const Landing = () => {
	return (
		<Background>
			<Login />
		</Background>
	);
};

export default Landing;
