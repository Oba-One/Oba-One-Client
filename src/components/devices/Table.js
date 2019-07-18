import React, { Suspense } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../global';

const StyledWrapper = styled(Wrapper)`
	grid-area: table;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 500px;
	border: 1px dotted red;
`;

const Table = ({ devices = [] }) => {
	return (
		<StyledWrapper>
			<Suspense fallback={<div>Loading...</div>}>Device Table</Suspense>
		</StyledWrapper>
	);
};

export default Table;
