import React from 'react';
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


const Notifications = ({}) => {
	return (
		<Article>
            Stream of Notifications Here
		</Article>
	);
};

export default Notifications;
