import { createContext } from 'react';

const DeviceContext = createContext({});

export const DeviceProvider = DeviceContext.Provider;
export const DeviceConsumer = DeviceContext.Consumer;

export default DeviceContext;
