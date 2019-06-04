import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Earth } from '../../assets/svgs';

const StyledLink = styled(NavLink)``;

const EarthLink = ({}) => {
	return <StyledLink>Earth</StyledLink>;
};

export default withRouter(EarthLink);