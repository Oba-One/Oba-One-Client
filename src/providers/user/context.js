import { createContext } from 'react';

const UserContext = createContext({
	uuid: ``,
	username: ``,
	avatar: ``,
	token: ``,
	loggedIn: null,
	settings: {},
	devices: [],
});

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export default UserContext;
