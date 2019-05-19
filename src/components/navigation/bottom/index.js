import React from 'react';
import styled from 'styled-components';
import { Avatar } from '../../global';
import AirLink from '../../containers/air/Link';
import WaterLink from '../../containers/water/Link';
import EarthLink from '../../containers/earth/Link';
import ProfileLink from '../../containers/profile/Link';
import HomeLink from '../../containers/home/Link';

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

const BottomNavigation = ({}) => {
	return (
		<Nav>
			<HomeLink>Home</HomeLink>
			<WaterLink>Water</WaterLink>
			<EarthLink>Earth</EarthLink>
			<AirLink>Air</AirLink>
			<ProfileLink>Profile Link  Shown if Mobile</ProfileLink>
		</Nav>
	);
};
