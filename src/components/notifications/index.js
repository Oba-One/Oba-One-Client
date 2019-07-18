import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useObservable } from 'rxjs-hooks';

import Notification from './Notification';
import { Subject } from 'rxjs';
import { filter, debounceTime} from 'rxjs/operators';

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


	useEffect(
		() => {
			// Subscribe to Notification Observable
			return () => {
				// Unsubscribe from Notification Observable
			};
		},
		// Only update if notifications update
		[],
	);

	if ( !notifications.length) {
		return null;
	}
	return <Article>Stream of Notifications Here {value}</Article>;
};

export default Notifications;
