import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Nav = styled(animated.nav)`
	position: sticky;
	display: flex;
	z-index: 1007;
	align-items: center;
	justify-content: space-between;
	padding: 0 27px;
	width: 100%;
	height: 60px;
	background: ${({ theme }) => theme.app.color.primary};
	box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
	border-bottom: solid 1px #dadce0;
	will-change: opacity transform;
`;

const Navigation = ({ location }) => {
	return <Nav> ProfileNavigation</Nav>;
};

export default withRouter(Navigation);
