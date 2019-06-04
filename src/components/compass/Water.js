import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Waves } from '../../assets/svgs';

const StyledLink = styled(NavLink)``;

const WaterLink = ({}) => {
	return <StyledLink>Water</StyledLink>;
};

export default withRouter(WaterLink);
