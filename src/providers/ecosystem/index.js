import React, { useState } from 'react';
import { EcosystemProvider as Provider } from './context';

const EcosystemProvider = ({ children }) => {
	return <Provider value={user}>{children}</Provider>;
};

export default EcosystemProvider;
