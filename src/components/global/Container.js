import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
	position: relative;
	margin: 0 auto;
	min-height: 100vh;
	width: 100%;
	max-width: ${({ theme }) => theme.breakpoint.desktop};
	padding-top: ${({ paddingTop }) => paddingTop};
	padding-bottom: ${({ paddingBottom }) => paddingBottom};
	@media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
		padding-left: ${({ desktopPadding }) => desktopPadding};
		padding-right: ${({ desktopPadding }) => desktopPadding};
	}
	@media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
		padding-left: ${({ tabletPadding }) => tabletPadding};
		padding-right: ${({ tabletPadding }) => tabletPadding};
	}
	@media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
		padding-left: ${({ mobilePadding }) => mobilePadding};
		padding-right: ${({ mobilePadding }) => mobilePadding};
	}
`;

const Container = ({
	mobilePadding = '0',
	tabletPadding = '0',
	desktopPadding = '32px',
	paddingTop = '0',
	paddingBottom = '0',
	className,
	children,
}) => (
	<Section
		mobilePadding={mobilePadding}
		tabletPadding={tabletPadding}
		desktopPadding={desktopPadding}
		paddingTop={paddingTop}
		paddingBottom={paddingBottom}
		className={className}
	>
		{children}
	</Section>
);

export default Container;
