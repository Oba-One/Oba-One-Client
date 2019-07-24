import React from 'react';
import styled from 'styled-components';
import { animated} from 'react-spring';


const Section = styled(animated.section)`
	position: relative;
	margin: 0 auto;
	width: 100%;
	max-width: ${({ theme, fullWidth }) => fullWidth ? '100vw' : theme.breakpoint.desktop};
	padding-top: ${({ paddingtop }) => paddingtop};
	padding-bottom: ${({ paddingbottom }) => paddingbottom};
	@media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
		padding-left: ${({ desktoppadding }) => desktoppadding};
		padding-right: ${({ desktoppadding }) => desktoppadding};
	}
	@media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
		padding-left: ${({ tabletpadding }) => tabletpadding};
		padding-right: ${({ tabletpadding }) => tabletpadding};
	}
	@media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
		padding-left: ${({ mobilepadding }) => mobilepadding};
		padding-right: ${({ mobilepadding }) => mobilepadding};
	}
`;

const Container = ({
	mobilepadding = '0',
	tabletpadding = '0',
	desktoppadding = '32px',
	paddingtop = '0',
	paddingbottom = '0',
	fullWidth = false,
	className,
	children,
}) => (
	<Section
		mobilepadding={mobilepadding}
		tabletpadding={tabletpadding}
		desktoppadding={desktoppadding}
		paddingtop={paddingtop}
		paddingbottom={paddingbottom}
		fullWidth={fullWidth}
		className={className}
	>
		{children}
	</Section>
);

export default Container;
