import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HomeIcon } from '../../../assets/svgs';

const StyledLink = styled(NavLink)``;

const HomeLink = ({}) => {
	const onClick = () => {};

	return (
		<StyledLink to="/home" onClick={() => onClick()}>
			Home
		</StyledLink>
	);
};

export default HomeLink;
