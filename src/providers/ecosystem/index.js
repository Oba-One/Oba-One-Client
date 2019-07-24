import React, { useReducer } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { EcosystemProvider as Provider } from './context';
import {
	ecosystemReducer,
	SET_ECOSYSTEM,
	GET_ECOSYSTEM,
	UPDATE_ECOSYSTEM,
} from './reducers';
import provider from '../mockData';

const EcosystemProvider = ({ children }) => {
	const [ecosystem, dispatch] = useReducer(
		ecosystemReducer,
		provider.ecosystem,
	);

	const setEcosystem = () => {
		dispatch({
			type: SET_ECOSYSTEM,
		});
	};

	const getEcosystem = () => {
		dispatch({
			type: GET_ECOSYSTEM,
		});
	};

	const updateEcosystem = (ecosystem = {}) => {
		dispatch({
			type: UPDATE_ECOSYSTEM,
			ecosystem: ecosystem,
		});
	};

	return (
		<Provider
			value={{
				state: ecosystem,
				setEcosystem: setEcosystem,
				getEcosystem: getEcosystem,
				updateEcosystem: updateEcosystem,
			}}
		>
			{children}
		</Provider>
	);
};

export default EcosystemProvider;
