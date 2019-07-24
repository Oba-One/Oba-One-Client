import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, ListItem } from '@material-ui/core';

const StyledItem = styled(ListItem)`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 60px;
	padding: 0 20px;
`;
const Thumbnail = styled.img`
	height: 70px;
	width: 70px;
	border-radius: 5px;
	object-fit: cover;
	object-position: center;
`;

const Content = styled.div`
	height: 100%;
	flex-grow: 1;
`;

const Name = styled.h2``;

const Description = styled.p``;

const Status = styled.p``;

const Info = styled(Button);

const LastUse = styled.p``;

const DeviceItem = ({
	thumbnail = '',
	name = '',
	description = '',
	info = {},
	status = '',
	lastUse = '',
}) => {
	return (
		<StyledItem button onClick={() => {}}>
			<Thumbnail src={thumbnail} />
			<Content>
				<Name>{name}</Name>
				<Description>{description}</Description>
				<div>
					<Status>{status}</Status>
					<LastUse>{lastUse}</LastUse>
					<Info {...info}>Info</Info>
				</div>
			</Content>
		</StyledItem>
	);
};

const DeviceItemMini = ({
	thumbnail = '',
	name = '',
	status = '',
	lastUse = '',
}) => {
	return (
		<StyledItem button key={device} onClick={() => {}}>
			<Thumbnail src={thumbnail} />
			<Content>
				<Name>{name}</Name>
				<Status>{status}</Status>
				<LastUse>{lastUse}</LastUse>
			</Content>
		</StyledItem>
	);
};

DeviceItem.propTypes = {
	thumbnail: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string,
	info: PropTypes.object,
	status: PropTypes.string,
	lastUse: PropTypes.string,
};

DeviceItemMini.propTypes = {
	thumbnail: PropTypes.string,
	name: PropTypes.string,
	status: PropTypes.string,
	lastUse: PropTypes.string,
};

export { DeviceItem, DeviceItemMini };
