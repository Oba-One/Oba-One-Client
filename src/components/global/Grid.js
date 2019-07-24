import React from 'react';
import styled from 'styled-components';

const GridLayout = styled.section`
	display: grid;
	overflow-x: hidden;
	grid-template-columns: repeat(${({ lgColumns }) => lgColumns}, 1fr);
	grid-template-rows: auto;
	@media (max-width: 920px) {
		grid-template-columns: repeat(${({ mdColumns }) => mdColumns}, 1fr);
		grid-template-rows: auto;
	}
	@media (max-width: 480px) {
		grid-template-columns: repeat(${({ smColumns }) => smColumns}, 1fr);
		grid-template-rows: auto;
	}
`;

const Grid = ({ lgColumns = 6, mdColumns = 4, smColumns = 2, className, children }) => (
	<GridLayout
		lgColumns={lgColumns}
		mdColumns={mdColumns}
		smColumns={smColumns}
		className={className}
	>
		{children}
	</GridLayout>
);

export default Grid;
