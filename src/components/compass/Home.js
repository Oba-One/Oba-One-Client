import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { HomeIcon } from '../../assets/svgs';

const StyledLink = styled(Link)``;

const HomeLink = ({}) => {
	const onClick = () => {};

	return (
		<StyledLink to="/home" onClick={() => onClick()}>
			<HomeIcon />
		</StyledLink>
	);
};

export default withRouter(HomeLink);
