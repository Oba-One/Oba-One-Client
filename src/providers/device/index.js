import React, { useState } from 'react';
import { UserProvider as Provider } from './context';

const DeviceProvider = ({ children }) => {
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

export default DeviceProvider;