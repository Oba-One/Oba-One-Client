import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
	FiveGIcon,
	CannabisIcon,
	DeathStarIcon,
	RocketIcon,
	WifiIcon,
} from '../../assets/svgs';

const StyledLink = styled(Link)``;

const DeviceLink = ({}) => {
	const onClick = () => {};

	return (
		<StyledLink to="/air" onClick={() => onClick()}>
			<DeathStarIcon />
		</StyledLink>
	);
};

const DashboardLink = ({}) => {
	const onClick = () => {};

	return (
		<StyledLink to="/air" onClick={() => onClick()}>
			<RocketIcon />
		</StyledLink>
	);
};

const StreamLink = ({}) => {
	const onClick = () => {};

	return (
		<StyledLink to="/air" onClick={() => onClick()}>
			<WifiIcon />
		</StyledLink>
	);
};

const RemoteLink = ({}) => {
	const onClick = () => {};

	return (
		<StyledLink to="/air" onClick={() => onClick()}>
			<CannabisIcon />
		</StyledLink>
	);
};

const SettingsLink = ({}) => {
	const onClick = () => {};

	return (
		<StyledLink to="/air" onClick={() => onClick()}>
			<FiveGIcon />
		</StyledLink>
	);
};

export { DeviceLink, DashboardLink, StreamLink, RemoteLink, SettingsLink };
