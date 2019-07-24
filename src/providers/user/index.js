import React, { useReducer } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { UserProvider as Provider } from './context';
import {
	userReducer,
	GET_USER,
	LOG_IN,
	LOG_OUT,
	UPDATE_USER,
	DELETE_USER,
} from './reducers';
import provider from '../mockData';

const UserProvider = ({ children }) => {
	const [user, dispatch] = useReducer(userReducer, provider.user);

	const getUser = id => {
		dispatch({
			type: GET_USER,
			id: id,
		});
	};

	const logIn = provider => {
		dispatch({
			type: LOG_IN,
			provider: provider,
		});
	};

	const logOut = provider => {
		dispatch({
			type: LOG_OUT,
			provider: provider,
		});
	};

	const updateUser = user => {
		dispatch({
			type: UPDATE_USER,
			user: user,
		});
	};

	const deleteUser = id => {
		dispatch({
			type: DELETE_USER,
			id: id,
		});
	};

	return (
		<Provider
			value={{
				state: user,
				getUser: getUser,
				logIn: logIn,
				logOut: logOut,
				updateUser: updateUser,
				deleteUser: deleteUser,
			}}
		>
			{children}
		</Provider>
	);
};

export default UserProvider;
