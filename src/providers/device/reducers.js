const GET_DEVICES = 'GET_DEVICES';
const CONNECT_DEVICE = 'CONNECT_DEVICE';
const DISCONNECT_DEVICE = 'DISCONNECT_DEVICE';
const ADD_DEVICE = 'ADD_DEVICE';
const UPDATE_DEVICE = 'UPDATE_DEVICE';
const DELETE_DEVICE = 'DELETE_DEVICE';

const getDevices = async () => {
	// Send Query & Update Device Context
};

const connectDevice = () => {
	// Subscribe to Observable & Set Device Context
};

const disconnectDevice = () => {
	// Unsubscribe to Observable & Set Device Context
};

const addDevice = async () => {
	// Send Mutation & Update Device Context
};

const updateDevice = async () => {
	// Send Mutation & Update Device Context
};

const deleteDevice = async () => {
	// Send Mutation & Update Device Context
};

const deviceReducer = (device, action) => {
	switch (action.type) {
		case GET_DEVICES:
			return getDevices(action.user.uuid);
		case CONNECT_DEVICE:
			break;
		case ADD_DEVICE:
			break;
		case UPDATE_DEVICE:
			break;
		case DISCONNECT_DEVICE:
			break;
		case DELETE_DEVICE:
			break;
		default:
			return device;
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
