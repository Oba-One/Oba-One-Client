import { createContext } from 'react';

const EcosystemContext = createContext({
	activeEcosystem: '',
	earthSettings: {},
	waterSettings: {},
	airSettings: {},
});

export const EcosystemProvider = EcosystemContext.Provider;
export const EcosystemConsumer = EcosystemContext.Consumer;

export default EcosystemContext;
