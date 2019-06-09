import React from 'react'
import styled from 'styled-components';
import { animated  } from 'react-spring'

const Wrapper = styled(animated.div)`
    width: 100%;
    height: 100%;
`;

const Dashboard = ({}) => {
    return (
        <Wrapper>
            Dashboard
        </Wrapper>
    )
}

export default Dashboard;