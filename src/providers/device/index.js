import React, { useState } from 'react';
import { DeviceProvider as Provider } from './context';
import provider from '../mockData';


const DeviceProvider = ({ children }) => {
	const [device, setDevice] = useState(provider.device);

	return <Provider value={device}>{children}</Provider>;
};

export default DeviceProvider;
