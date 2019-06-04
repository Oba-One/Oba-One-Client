import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Fire } from '../../assets/svgs';

const StyledLink = styled(NavLink)``;

const AirLink = ({}) => {
	const onClick = () => {};

	return (
		<StyledLink to="/air" onClick={() => onClick()}>
			<Fire />
		</StyledLink>
	);
};

export default AirLink;
