import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { ListItem, Avatar, Button, Card } from '@material-ui/core';

const Item = styled(animated(ListItem))`
	height: 240px;
	width: 100% !important;
	justify-content: center !important;
`;

const StyledCard = styled(Card)`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 20px;
	width: 70%;
	height: 100%;
	border-radius: 10px !important;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
	transition: all 0.3s ease-in-out;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 30px;
`;

const Actions = styled.div`
	align-self: flex-end;
	margin-left: auto;
	order: 2;
`;

const Name = styled.h3``;

const Description = styled.p``;

const Status = styled.p``;

const Action = styled(Button)``;

const Thumbnail = styled.img`
	height: 160px;
	width: 160px;
	border-radius: 5px 20px 5px;
`;

const Device = ({
	name = `Arduino`,
	description = `Arduino Device`,
	thumbnail = `https://via.placeholder.com/160`,
	status = `DISCONNECTED`,
}) => {
	return (
		<Item>
			<StyledCard>
				<Thumbnail src={thumbnail} alt={description} />
				<Content>
					<Name>{name}</Name>
					<Description>{description}</Description>
					<Status>{status}</Status>
				</Content>
				<Actions>
					<Action onClick>INFO</Action>
					<Action onClick>CONNECT</Action>
				</Actions>
			</StyledCard>
		</Item>
	);
};

const QuickConnectItem = styled(animated(ListItem))`
	display: flex;
	justify-content: flex-start;
	height: 100px;
	width: 100%;
`;

const QuickConnectDevice = ({
	name = `Arduino`,
	thumbnail = `https://via.placeholder.com/50`,
	status = `DISCONNECTED`,
}) => {
	return (
		<QuickConnectItem button divider>
			<Avatar src={thumbnail} alt={name} />
			<Name style={{paddingLeft: '16px'}}>{name}</Name>
			<Status style={{ marginLeft: 'auto', order: 2 }}>{status}</Status>
		</QuickConnectItem>
	);
};

export { Device, QuickConnectDevice };
