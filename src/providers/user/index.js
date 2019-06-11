import React, { useState } from 'react';
import { UserProvider as Provider } from './context';

const UserProvider = ({ children }) => {
	return <Provider value={user}>{children}</Provider>;
};

export default UserProvider;
