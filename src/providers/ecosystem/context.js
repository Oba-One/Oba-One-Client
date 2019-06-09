import { createContext } from 'react';

const EcosystemContext = createContext({});

export const EcosystemProvider = EcosystemContext.Provider;
export const EcosystemConsumer = EcosystemContext.Consumer;

export default EcosystemContext;
