import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	grid-area: spotify;
	height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid purple;
`;

const Spotify = ({}) => {
	return <Wrapper>Spotify</Wrapper>;
};

export default Spotify;