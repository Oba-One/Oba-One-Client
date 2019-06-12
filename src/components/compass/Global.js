import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FireIcon, EarthIcon, WavesIcon, HomeIcon } from '../../assets/svgs';

const StyledLink = styled(Link)``;

const AirLink = ({}) => {
	const onClick = () => {};

	return (
		<StyledLink to="/air" onClick={() => onClick()}>
			<FireIcon />
		</StyledLink>
	);
};

const HomeLink = ({}) => {
	const onClick = () => {};

	return (
		<StyledLink to="/home" onClick={() => onClick()}>
			<HomeIcon />
		</StyledLink>
	);
};

const WaterLink = ({}) => {
	const onClick = () => {};

	return (
		<StyledLink to="/water" onClick={() => onClick()}>
			<WavesIcon />
		</StyledLink>
	);
};

const EarthLink = ({}) => {
	const onClick = () => {};

	return (
		<StyledLink to="/earth" onClick={() => onClick()}>
			<EarthIcon />
		</StyledLink>
	);
};

export { AirLink, HomeLink, WaterLink, EarthLink };
