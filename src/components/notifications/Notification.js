import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { Chip } from '@material-ui/core';

const Wrapper = styled(animated.div)``;

const StyledChip = styled(Chip)``;

const Notification = ({
	type = '',
	message = 'Hello',
	link = '',
	onClick,
	onDelete,
}) => (
	<Wrapper>
		<StyledChip
			avatar={<div>H</div>}
			label={type}
			onClick={onClick}
			onDelete={onDelete}
			clickable={true}
		/>
	</Wrapper>
);

export default Notification;
