import { gql } from 'apollo-boost';

const DeviceInput = gql`
    input DeviceInput {
        id: ID!
        name: String!
        thumbnail: String
    }
`

const GET_DEVICES_QUERY = gql`
	mutation GetDevices($id: String!) {
		getDevices(id: $id) {
			id
			username
		}
	}
`;

const CONNECT_DEVICE_SUBSCRIPTION = gql`
	mutation ConnectDevice($device: DeviceInput) {
		connectDevice(device: $device) {
			id
			username
		}
	}
`;

const ADD_DEVICE_MUTATION = gql`
	mutation AddDevice($device: DeviceInput) {
		addDevice(device: $device) {
			id
			username
		}
	}
`;

const UPDATE_DEVICE_MUTATION = gql`
	mutation UpdateUser($device: DeviceInput) {
		updateUser(device: $device) {
			id
			username
		}
	}
`;

const DELETE_DEVICE_MUTATION = gql`
	mutation DeleteUser($id: String!) {
		deleteUser(id: $id) {
			id
			username
		}
	}
`;

export {
	GET_DEVICES_QUERY,
	CONNECT_DEVICE_SUBSCRIPTION,
    DISCONNECT_DEVICE_SUBSCRIPTION,
    ADD_DEVICE_MUTATION,
	UPDATE_DEVICE_MUTATION,
	DELETE_DEVICE_MUTATION,
};
