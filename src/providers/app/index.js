import React, { useReducer } from 'react';
import { AppProvider as Provider } from './context';
import { appReducer} from './reducers'

const AppProvider = ({ children }) => {

	const [app, dispatch] = useReducer(appReducer, {})

	return <Provider value={{
		state:  app,
		
	}}>{children}</Provider>;
};

export default AppProvider;
