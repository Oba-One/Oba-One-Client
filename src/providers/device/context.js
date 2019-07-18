import { createContext } from 'react';

const DeviceContext = createContext({
	activeDevice: {},
	devices: [],
});

export const DeviceProvider = DeviceContext.Provider;
export const DeviceConsumer = DeviceContext.Consumer;

export default DeviceContext;
