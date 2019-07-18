import React, { useContext } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import { Drawer, List, ListItem, Divider } from '@material-ui/core';

import {
	HomeIcon,
	AccountIcon,
	StarIcon,
	DeathStarIcon,
	PlusIcon,
} from '../../assets/svgs';

import UserContext from '../../providers/user/context';

const StyledList = styled.ul`
    height: 100%;
    width: 25%;
    padding-top: 10%;
    padding-left: 0;
    display: flex;
    flex-direction: column;

`;

const StyledLink = styled(ListItem)`
	width: 100% !important;
	display: flex !important;
	justify-content: flex-end !important;
    padding: 20px 0;

    svg {
        transform: scale(0.7);
    }
`;

const LinkName = styled.h3`
	text-transform: capitalize;
    font-size: 18px;
    font-weight: 500;
`;

const topLinks = [
	{ link: `user`, icon: <AccountIcon /> },
	{ link: `account`, icon: <StarIcon /> },
	{ link: `devices`, icon: <PlusIcon /> },
	{ link: `ecosystem`, icon: <DeathStarIcon /> },
];

const bottomLinks = [
    { link: `home`, useIcon: false },
	{ link: `help`, useIcon: false },
	{ link: `settins`, useIcon: false },
	{ link: `logout`, useIcon: false },
];

const SidebarLink = ({
	link = `profile`,
	icon = <AccountIcon />,
	useIcon = true,
}) => {
	const handleClick = link => {
		navigate(`/profile/${link}`);
	};
	return (
		<StyledLink onClick={() => handleClick(link)} button key={link}>
			{useIcon && icon}
			<LinkName>{link}</LinkName>
		</StyledLink>
	);
};

const Sidebar = ({ children }) => {
	const user = useContext(UserContext);
	return (

			<StyledList dense>
				<div>
					{topLinks.map(link => (
						<SidebarLink {...link} />
					))}
				</div>
				<Divider />
				<div>
					{bottomLinks.map(link => (
						<SidebarLink {...link} />
					))}
				</div>
			</StyledList>
	);
};

export default Sidebar;
