import { gql } from 'apollo-boost';

const GET_ECOSYSTEM_QUERY = gql`
	mutation GetEcosystem($id: String!) {
		getEcosystem(id: $id) {
			id
			username
		}
	}
`;

const SET_ECOSYSTEM_QUERY = gql`
	mutation SetEcosystem($user: String!) {
		setEcosystem(user: $user) {
			id
			username
		}
	}
`;

const UPDATE_ECOSYSTEM_MUTATION = gql`
	mutation UpdateEcosystem($user: String!) {
		updateEcosystem(user: $user) {
			id
			username
		}
	}
`;


export {
    GET_ECOSYSTEM_QUERY,
    SET_ECOSYSTEM_QUERY,
    UPDATE_ECOSYSTEM_MUTATION
};
