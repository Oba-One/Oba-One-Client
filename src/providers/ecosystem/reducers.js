const GET_ECOSYSTEMS = 'GET_ECOSYSTEMS';
const SET_ECOSYSTEM = 'SET_ECOSYSTEM';
const UPDATE_ECOSYSTEM = 'UPDATE_ECOSYSTEM';

const getEcosytems = () => {
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
		case GET_ECOSYSTEMS:
			break;
		case SET_ECOSYSTEM:
			break;
		case UPDATE_ECOSYTEM:
			break;
		default:
			return ecosystem;
	}
};

export { ecosystemReducer, GET_ECOSYSTEMS, SET_ECOSYSTEM, UPDATE_ECOSYSTEM };
