import React, { useState } from 'react';
import { DeviceProvider as Provider } from './context';

const DeviceProvider = ({ children }) => {
	return <Provider value={{}}>{children}</Provider>;
};

export default DeviceProvider;
