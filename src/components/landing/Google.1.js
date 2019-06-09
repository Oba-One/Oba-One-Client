import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import UserContext from '../../providers/user/context';
import firebaseConfig from './firebaseInit';
firebase.initializeApp(firebaseConfig);

const Container = styled.div``;
const Success = styled.div``;

const Login = ({ history }) => {
	const [authSuccess, setAuthSuccess] = useState(null);
	const [provider, setProvider] = useState(null);
	const user = useContext(UserContext);

	const handleClick = (authProvider = '') => {
		const provider =
			authProvider === 'google'
				? new firebase.auth.GoogleAuthProvider()
				: new firebase.auth.GithubAuthProvider();
		setProvider(provider);
		firebase.auth().signInWithRedirect(provider);
	};

	return (
		<Container>
			<button onClick={handleClick('google')}>Google</button>
			<button onClick={handleClick('github')}>Github</button>
		</Container>
	);
};

export default withRouter(Login);
