const GET_ECOSYSTEM = 'GET_ECOSYSTEM';
const SET_ECOSYSTEM = 'SET_ECOSYSTEM';
const UPDATE_ECOSYSTEM = 'UPDATE_ECOSYSTEM';

const getEcosytem = () => {
	// Send Query & Update Ecosystem Context
};

const updateEcosytem = () => {
	// Send Mutation & Update Ecosystem Context
};

const setEcosystem = () => {
	// Update Ecosystem Context
};

const ecosystemReducer = (ecosystem, action) => {
	switch (action.type) {
		case GET_ECOSYSTEM:
			break;
		case SET_ECOSYSTEM:
			break;
		case UPDATE_ECOSYTEM:
			break;
		default:
			return ecosystem;
	}
};

export { ecosystemReducer, GET_ECOSYSTEM, SET_ECOSYSTEM, UPDATE_ECOSYSTEM };
