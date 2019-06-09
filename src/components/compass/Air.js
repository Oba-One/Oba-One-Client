import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FireIcon } from '../../assets/svgs';

const StyledLink = styled(Link)``;

const AirLink = ({}) => {
	const onClick = () => {};

	return (
		<StyledLink to="/air" onClick={() => onClick()}>
			<FireIcon/>
		</StyledLink>
	);
};

export default AirLink;
