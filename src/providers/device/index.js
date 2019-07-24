import React, { useReducer } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { DeviceProvider as Provider } from './context';
import {
	deviceReducer,
	GET_DEVICES,
	CONNECT_DEVICE,
	DISCONNECT_DEVICE,
	ADD_DEVICE,
	UPDATE_DEVICE,
	DELETE_DEVICE,
} from './reducers';
import provider from '../mockData';

const DeviceProvider = ({ children }) => {
	const [device, dispatch] = useReducer(deviceReducer, provider.device);

	const getDevices = () => {
		dispatch({
			type: GET_DEVICES,
		});
	};

	const connectDevice = (device = {}) => {
		dispatch({
			type: CONNECT_DEVICE,
			device: device,
		});
	};

	const disconnectDevice = () => {
		dispatch({
			type: DISCONNECT_DEVICE,
		});
	};

	const addDevice = (device = {}) => {
		dispatch({
			type: ADD_DEVICE,
			device: device,
		});
	};

	const updateDevice = (device = {}) => {
		dispatch({
			type: UPDATE_DEVICE,
			device: device,
		});
	};

	const deleteDevice = (deviceID = ``) => {
		dispatch({
			type: DELETE_DEVICE,
			deviceID: deviceID,
		});
	};
	return (
		<Provider
			value={{
				state: device,
				getDevices: getDevices,
				connectDevice: connectDevice,
				disconnectDevice: disconnectDevice,
				addDevice: addDevice,
				updateDevice: updateDevice,
				deleteDevice: deleteDevice,
			}}
		>
			{children}
		</Provider>
	);
};

export default DeviceProvider;
