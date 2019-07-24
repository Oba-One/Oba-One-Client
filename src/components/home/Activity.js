import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	grid-area: activity;
	height: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid purple;
`;

const Activity = ({}) => {
	return <Wrapper>Activity</Wrapper>;
};

export default Activity;
