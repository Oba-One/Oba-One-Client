import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Wrapper } from '../global';

const styleIcon = Icon => {
	const StyledIcon = styled(Icon)``;

	return StyledIcon;
};

const Login = ({ onClick = () => {}, Icon = () => {}, Modal = () => {}  }) => {
    const StyledIcon = styleIcon(Icon);
    const LazyModal = lazy(() => import(Modal))
	return (
		<Suspense fallback={<div>Comp Loading</div>}>
			<Wrapper>
				<StyledIcon onClick={onClick} />
			</Wrapper>
		</Suspense>
	);
};

export default Login;
