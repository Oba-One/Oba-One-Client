import React from 'react';
import styled from 'styled-components';
import AirLink from '../containers/air/Link';
import WaterLink from '../containers/water/Link';
import EarthLink from '../containers/earth/Link';
import ProfileLink from '../containers/profile/Link';
import HomeLink from '../containers/home/Link';

const Nav = styled.nav`
	position: fixed;
	left: 50%;
	bottom: 0;
	transform: translate(-50%, -30px);
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50%;
	height: 70px;
	border-radius: ${({ theme }) => theme.border.radiusSm};
	background: ${({ theme }) => theme.app.color.alternate};
	will-change: transform;
	@media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
		width: 100%;
		transform: translate(-50%, 0);
	}
`;

const Compass = ({}) => {
	return (
		<Nav>
			<HomeLink>Home</HomeLink>
			<WaterLink>Water</WaterLink>
			<EarthLink>Earth</EarthLink>
			<AirLink>Air</AirLink>
			<ProfileLink>Profile Link Shown if Mobile</ProfileLink>
		</Nav>
	);
};

export default Compass;
