import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Image = styled.img``;

const Logo = ({ src }) => {
	return (
		<Wrapper>
			<Image src={src} />
            Logo
		</Wrapper>
	);
};

export default Logo;
