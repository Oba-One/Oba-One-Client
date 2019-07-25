import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, MenuList, Divider } from '@material-ui/core';

import { Avatar, Popover } from '../global';
import { DevicesLink, ProfileLink, LogoutLink } from './Links';
import { AccountIcon } from '../../assets/svgs';

const StyledAccountIcon = styled(AccountIcon)`
	color: white;
	transform: scale(1.5);
	border-radius: 10px;
`;

const StyledButton = styled(Button)`
	height: 60px;
`;

const List = styled(MenuList)`
	width: 120px;
`;

const Profile = ({ avatar = `` }) => {
	const [anchorEl, setAnchorEl] = useState(null);

	function handleClick(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleClose() {
		setAnchorEl(null);
	}

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : null;

	return (
		<>
			<StyledButton aria-describedby={id} onClick={handleClick}>
				{avatar ? <Avatar src={avatar} /> : <StyledAccountIcon />}
			</StyledButton>
			<Popover
				id={id}
				open={open}
				getContentAnchorEl={null}
				anchorEl={anchorEl}
				handleClose={handleClose}
			>
				<List>
					<ProfileLink handleClose={handleClose} />
					<DevicesLink handleClose={handleClose} />
					<Divider />
					<LogoutLink handleClose={handleClose} />
				</List>
			</Popover>
		</>
	);
};

export default Profile;
