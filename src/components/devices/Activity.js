import React, { Suspense} from 'react';
import styled from 'styled-components';

import { Wrapper } from '../global';

const StyledWrapper = styled(Wrapper)`
	grid-area: activity;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
    height: 500px;
    border: 1px dotted red;
`;

const Activity = ({ devices = [] }) => {
	return (
		<StyledWrapper>
			<Suspense fallback={<div>Loading...</div>}>Activity</Suspense>
		</StyledWrapper>
	);
};

export default Activity