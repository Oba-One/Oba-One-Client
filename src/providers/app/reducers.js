const GET_USER = 'GET_USER';
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const UPDATE_USER = 'UPDATE_USER';
const DELETE_USER = 'DELETE_USER';

const getUser = () => {};

const logIn = provider => {
	// Firebase Auth for Google and Github
	if (provider === 'google') {
		// Google Auth Flow
	} else if (provider === 'github') {
	} else {
		return;
	}
};

const logOut = token => {
	console.log(token);
	// Firebase Log Out Callback here
};

const updateUser = () => {};

const deleteUser = () => {};

const userReducer = (state, action) => {
	switch (action.type) {
		case GET_USER:
			break;
		case LOG_IN:
			break;
		case UPDATE_USER:
			break;
		case LOG_OUT:
			break;
		case DELETE_USER:
			break;
		default:
			return state;
	}
};

export { userReducer, GET_USER, LOG_IN, LOG_OUT, UPDATE_USER, DELETE_USER };