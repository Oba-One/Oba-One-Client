const GET_ECOSYSTEM = 'GET_ECOSYSTEM';
const SET_ECOSYSTEM = 'SET_ECOSYSTEM';
const UPDATE_ECOSYSTEM = 'UPDATE_ECOSYSTEM';

const getEcosytem = state => {
	// Send Query & Update Ecosystem Context
	console.log(state);
};

const updateEcosytem = (state, ecosystem) => {
	// Send Mutation & Update Ecosystem Context
	console.log(state);
	console.log(ecosystem);
};

const setEcosystem = state => {
	// Update Ecosystem Context
	console.log(state);
};

const ecosystemReducer = (state, action) => {
	switch (action.type) {
		case GET_ECOSYSTEM:
			return getEcosytem(state);
		case SET_ECOSYSTEM:
			return setEcosystem(state);
		case UPDATE_ECOSYTEM:
			return updateEcosytem(state, action.ecosystem);
		default:
			return state;
	}
};

export { ecosystemReducer, GET_ECOSYSTEM, SET_ECOSYSTEM, UPDATE_ECOSYSTEM };
