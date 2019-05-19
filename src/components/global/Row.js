import React from 'react';
import styled from 'styled-components';

const RowLayout = styled.div`
	display: flex;
	@media (min-width: 768px) {
	}
	@media (min-width: 480px) {
	}
`;

const Row = ({ items = 4 }) => <RowLayout />;

export default Row;
