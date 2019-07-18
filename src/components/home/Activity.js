import React, { useState} from 'react';
import styled from 'styled-components';
import Login from './ApiLogin';

const Wrapper = styled.div`
	grid-area: activity;
	height: 620px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid purple;
`;

const Activity = ({}) => {
    const [loggedIn,  setLoggedIn] = useState(false);
	return <Wrapper>
        { loggedIn ? (
            <div> API</div>
        ): (
            Activity
        )}
    </Wrapper>;
};

export default Activity;
