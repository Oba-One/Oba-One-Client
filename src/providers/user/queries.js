import { gql } from 'apollo-boost';

const GET_USER_QUERY = gql`
	mutation GetUser($id: String!) {
		getUserProfile(id: $id) {
			id
			username
		}
	}
`;

const LOG_IN_MUTATION = gql`
	mutation LogIn($provider: String!) {
		logIn(provider: $provider) {
			id
			username
		}
	}
`;

const LOG_OUT_MUTATION = gql`
	mutation LogOut($id: String!) {
		logOut(id: $id) {
			id
			username
		}
	}
`;

const UPDATE_USER_MUTATION = gql`
	mutation UpdateUser($user: String!) {
		updateUser(user: $user) {
			id
			username
		}
	}
`;

const DELETE_USER_MUTATION = gql`
	mutation DeleteUser($id: String!) {
		deleteUser(id: $id) {
			id
			username
		}
	}
`;

export {
	GET_USER_QUERY,
	LOG_IN_MUTATION,
	LOG_OUT_MUTATION,
	UPDATE_USER_MUTATION,
	DELETE_USER_MUTATION,
};
