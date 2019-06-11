import { createContext } from 'react';

const DeviceContext = createContext({
	activeDevice: {},
	devices: [],
	deviceObservable: null,
});

export const DeviceProvider = DeviceContext.Provider;
export const DeviceConsumer = DeviceContext.Consumer;

export default DeviceContext;
