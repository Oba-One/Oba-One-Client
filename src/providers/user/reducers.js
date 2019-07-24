import { useQuery, useMutation } from '@apollo/react-hooks';
import {
	GET_USER_QUERY,
	LOG_IN_MUTATION,
	LOG_OUT_MUTATION,
	UPDATE_USER_MUTATION,
	DELETE_USER_MUTATION,
} from './queries';

const GET_USER = 'GET_USER';
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const UPDATE_USER = 'UPDATE_USER';
const DELETE_USER = 'DELETE_USER';

const getUser = (state = {}, id = ``) => {
	// Send Query & Update User Context
	console.log(state);
	console.log(id);

	return state;
};

const logIn = (state = {}, provider = ``) => {
	// Send Mutation & Update User Context
	console.log(state);
	console.log(provider);

	return state;
};

const logOut = (state = {}, user = {}) => {
	// Send Mutation & Update User Context
	console.log(user);
	console.log(state);

	return state;
};

const updateUser = (state = {}, user = {}) => {
	// Send Mutation & Update User Context
	console.log(user);
	console.log(state);

	return state;
};

const deleteUser = (state = {}, id = ``) => {
	// Send Mutation & Update User Context
	console.log(state);
	console.log(id);

	return state;
};

const userReducer = (state, action) => {
	switch (action.type) {
		case GET_USER:
			return getUser(state, action.id);
		case LOG_IN:
			return logIn(state, action.provider);
		case UPDATE_USER:
			return updateUser(state, action.user);
		case LOG_OUT:
			return logOut(state, action.user);
		case DELETE_USER:
			return deleteUser(state, action.id);
		default:
			return state;
	}
};

export { userReducer, GET_USER, LOG_IN, LOG_OUT, UPDATE_USER, DELETE_USER };
