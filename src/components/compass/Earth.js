import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { EarthIcon } from '../../assets/svgs';

const StyledLink = styled(Link)``;

const EarthLink = ({}) => {
	const onClick = () => {};

	return (
		<StyledLink to="/earth" onClick={() => onClick()}>
			<EarthIcon />
		</StyledLink>
	);
};

export default withRouter(EarthLink);
