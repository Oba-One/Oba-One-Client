import React, { useState } from 'react';
import { AppProvider as Provider } from './context';

const AppProvider = ({ children }) => {
	return <Provider value={{}}>{children}</Provider>;
};

export default AppProvider;