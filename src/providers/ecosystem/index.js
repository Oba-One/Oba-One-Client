import React, { useState } from 'react';
import { EcosystemProvider as Provider } from './context';
import provider from '../mockData';

const EcosystemProvider = ({ children }) => {
	const [ecosystem, setEcosystem] = useState(provider.ecosystem);

	return <Provider value={ecosystem}>{children}</Provider>;
};

export default EcosystemProvider;
