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

const getUser = (id = ``, state = {}) => {
	console.log(state);
	console.log(id);

	return state;
};

const logIn = (provider, state) => {
	console.log(state);
	console.log(provider);

	return state;
};

const logOut = (user, state) => {
	console.log(user);
	console.log(provider);

	return state;
};

const updateUser = (user, state) => {
	console.log(user);
	console.log(provider);

	return state;
};

const deleteUser = (id = ``, state = {}) => {
	console.log(state);
	console.log(id);

	return state;
};
const userReducer = (state, action) => {
	switch (action.type) {
		case GET_USER:
			return getUser(action.id, state);
		case LOG_IN:
			return logIn(action.provider, state);
		case UPDATE_USER:
			return updateUser(action.user, state);
		case LOG_OUT:
			return logOut(action.user, state);
		case DELETE_USER:
			return deleteUser(id, state);
		default:
			return state;
	}
};

export { userReducer, GET_USER, LOG_IN, LOG_OUT, UPDATE_USER, DELETE_USER };
