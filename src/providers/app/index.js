import React, { useState } from 'react';
import { AppProvider as Provider } from './context';

const AppProvider = ({ children }) => {
	const [user, setUser] = useState({
		uuid: ``,
		username: ``,
		avatar: ``,
		token: ``,
		loggedIn: null,
		settings: {},
		devices: [],
        setUser: () => setUser(),
        as
	});
	return <Provider value={user}>{children}</Provider>;
};

export default AppProvider;