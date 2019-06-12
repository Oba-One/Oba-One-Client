import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { GithubIcon, GoogleIcon } from '../../assets/svgs';

const Button = styled.button`
	margin-bottom: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	width: 240px;
	height: 48px;
	background-color: #4285f4;
	color: #f9f9f9;
	border-radius: 4px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
	transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;

	&:hover {
		box-shadow: 0 0 1px 1px rgba(66, 133, 244, 0.3);
		background-color: #00173d;
		opacity: 1;
	}

	&:active {
		background-color: #3367d6;
		transition: background-color 0.2s;
	}
`;

const GitIcon = styled(GithubIcon)`
	margin-right: 10px;
`;

const GooIcon = styled(GoogleIcon)`
	margin-right: 10px;
`;

const Text = styled.p`
	font-size: 14px;
`;

const Github = ({ onClick, loadAuth = false }) => {
	return (
		<Button>
			<GitIcon />
			<Text>Login With Github</Text>
		</Button>
	);
};

const Google = ({ onClick, loadAuth = false }) => {
	return (
		<Button>
			<GooIcon />
			<Text>Login With Google</Text>
		</Button>
	);
};

export { Github, Google };
