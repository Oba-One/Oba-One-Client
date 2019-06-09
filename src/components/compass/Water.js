import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { WavesIcon } from '../../assets/svgs';

const StyledLink = styled(Link)``;

const WaterLink = ({}) => {
	const onClick = () => {};

	return (
		<StyledLink to="/water" onClick={() => onClick()}>
			<WavesIcon />
		</StyledLink>
	);
};

export default withRouter(WaterLink);
