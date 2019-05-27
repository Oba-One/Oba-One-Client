import React from 'react';
import styled from 'styled-components';
import { Avatar } from '../global';

const StyledHeader = styled.header`
	position: fixed;
	display: flex;
	z-index: 1007;
	align-items: center;
	justify-content: space-between;
	padding: 0 27px;
	width: 100%;
	height: 80px;
	background: ${({theme}) => theme.app.color.primary};
	box-shadow: 0px 2px 6px 0px rgba(0,0,0,.12);
	border-bottom: solid 1px #dadce0;
	will-change: opacity transform;
`;

const Logo = styled.div`

`;

const Profile = styled.div`

`;

const Header = ({}) => {
	return (
		<StyledHeader>
			<Logo>Logo</Logo>
			<Profile>Profile</Profile>
		</StyledHeader>
	);
};

export default Header;