import React, { useState } from 'react';
import { UserProvider as Provider } from './context';

const UserProvider = ({ children }) => {
	const [user, setUser] = useState({
		uuid: ``,
		username: ``,
		avatar: ``,
		token: ``,
		loggedIn: null,
		settings: {},
		devices: [],
		setUser: () => setUser(),
	});
	return <Provider value={user}>{children}</Provider>;
};

export default UserProvider;
