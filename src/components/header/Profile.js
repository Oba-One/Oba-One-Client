import React, { useState } from 'react';
import styled from 'styled-components';
import { Avatar } from '../global';

import { AccountIcon } from '../../assets/svgs';

const StyledAccountIcon = styled(AccountIcon)``;

const Wrapper = styled.figure``;

const Profile = ({ hasAvatar = false, avatar = `` }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const onClick = () => {
		// Open Profile Dropdown Menu
	};
	return (
		<Wrapper onClick={onClick}>
			{hasAvatar ? <Avatar /> : <StyledAccountIcon />}
		</Wrapper>
	);
};

export default Profile;
