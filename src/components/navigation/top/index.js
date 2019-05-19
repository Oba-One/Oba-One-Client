import React from 'react';
import styled from 'styled-components';
import { Avatar } from '../../global';

const Nav = styled.nav`
	position: sticky;
	display: flex;
	align-items: center;
	width: 100%;
	height: 80px;
`;

const Logo = styled.div`
	justify-self: start;
`;

const Profile = styled.div`
	justify-self: end;
`;

const TopNavigation = ({}) => {
	return (
		<Nav>
			<Logo>Logo</Logo>
			<Profile>Profile</Profile>
		</Nav>
	);
};
