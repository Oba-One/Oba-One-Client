import React from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';
import { MenuItem } from '@material-ui/core';

import { DeathStarIcon, AccountIcon} from '../../assets/svgs';

const Item = styled(MenuItem)`
	display: flex;
	justify-content: space-between;
	padding: 0 10px !important;
	margin: 0;

	& svg {
		transform: scale(0.8);
	}
`;

const Name = styled.p`
	font-size: 15px;
	font-weight: 500;
	margin: 0;
	padding-left: 7px;
`;

const DevicesLink = ({ handleClose }) => {
	function handleClick(event) {
        handleClose();
		navigate(`/devices`);
	}

	return (
		<Item onClick={handleClick}>
			<DeathStarIcon />
			<Name>Devices</Name>
		</Item>
	);
};

const ProfileLink = ({ handleClose }) => {
	function handleClick(event) {
        handleClose();
		navigate(`/profile/user`);
	}

	return (
		<Item onClick={handleClick}>
			<AccountIcon/>
			<Name>Profile</Name>
		</Item>
	);
};

const LogoutLink = ({ handleClose }) => {
	function handleClick(event) {
        handleClose();
		navigate(`/landing`);
	}

	return (
		<Item onClick={handleClick}>
			<Name>Logout</Name>
		</Item>
	);
};

export { DevicesLink, ProfileLink, LogoutLink };
