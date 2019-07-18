import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconButton, Dialog, CircularProgress } from '@material-ui/core';
import { Wrapper } from '../global';

const StyledWrapper = styled(Wrapper)`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Api = styled.h3`
	font-size: 24px;
	text-transform: capitalize;
`;

const Icon = styled(IconButton)`
	display: flex !important;
	flex-direction: column !important;
	height: 100px;
	width: 100px;
`;

const Login = ({
	onClick = () => {},
	isLoading = false,
	icon = `ICON`,
	api = ``,
}) => {
	return (
		<Suspense fallback={<CircularProgress />}>
			<StyledWrapper>
				{!isLoading ? (
					<>
						<Icon onClick={onClick}>
							{icon}
							{api && <Api>{api}</Api>}
						</Icon>
					</>
				) : (
					<CircularProgress />
				)}
			</StyledWrapper>
		</Suspense>
	);
};

export default Login;
