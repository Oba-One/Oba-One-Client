import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Article = styled.article`
	position: absolute;
	border: 2px dotted purple;
	top: 80px;
	left: 0;
	right: 0;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80%;
	height: 40px;
	border-radius: ${({ theme }) => theme.border.radiusSm};
`;

const Notifications = ({ location }) => {
	const [notifications, setNotifications] = useState([]);
	const isLanding = location.pathname === '/landing';

	if (isLanding || !notifications.length) {
		return null;
	}
	return <Article>Stream of Notifications Here {value}</Article>;
};

export default withRouter(Notifications);
