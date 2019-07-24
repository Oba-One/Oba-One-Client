const GET_DEVICES = 'GET_DEVICES';
const CONNECT_DEVICE = 'CONNECT_DEVICE';
const DISCONNECT_DEVICE = 'DISCONNECT_DEVICE';
const ADD_DEVICE = 'ADD_DEVICE';
const UPDATE_DEVICE = 'UPDATE_DEVICE';
const DELETE_DEVICE = 'DELETE_DEVICE';

const getDevices = async (state = {}, id = ``) => {
	// Send Query & Update Device Context
	console.log(state);
	console.log(id);


	return state;
};

const connectDevice = (state = {}, device  = {}) => {
	// Subscribe to Observable & Set Device Context
	console.log(state);
	console.log(device);

	return state;
};

const disconnectDevice = (state = {}) => {
	// Unsubscribe to Observable & Set Device Context
	console.log(state);

	return state;
};

const addDevice = async (state = {}, device = {}) => {
	// Send Mutation & Update Device Context
	console.log(state);
	console.log(device);

	return state;
};

const updateDevice = async (state = {}, device = {}) => {
	// Send Mutation & Update Device Context
	console.log(state);
	console.log(device);

	return state;
};

const deleteDevice = async (state, deviceID) => {
	// Send Mutation & Update Device Context
	console.log(state);
	console.log(deviceID);

	return state;
};

const deviceReducer = (state, action) => {
	switch (action.type) {
		case GET_DEVICES:
			return getDevices(state, action.id);
		case CONNECT_DEVICE:
			return connectDevice(state, action.device);
		case DISCONNECT_DEVICE:
			return disconnectDevice(state);
		case ADD_DEVICE:
			return addDevice(state, action.device);
		case UPDATE_DEVICE:
			return updateDevice(state, action.device);
		case DELETE_DEVICE:
			return deleteDevice(state, action.deviceID);
		default:
			return state;
	}
};

export {
	deviceReducer,
	GET_DEVICES,
	CONNECT_DEVICE,
	DISCONNECT_DEVICE,
	ADD_DEVICE,
	UPDATE_DEVICE,
	DELETE_DEVICE,
};
