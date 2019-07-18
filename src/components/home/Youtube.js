import React, { useState} from 'react';
import styled from 'styled-components';
import Login from './ApiLogin';

const Wrapper = styled.div`
	grid-area: utube;
	height: 420px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid purple;
`;

const Youtube = ({}) => {
	const [loggedIn, setLoggedIn] = useState(false);
	return <Wrapper>{loggedIn ? <div> API</div> : <Login isLoading />}</Wrapper>;
};

export default Youtube;
