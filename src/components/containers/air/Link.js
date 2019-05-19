import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`

`;

const AirLink = ({})  => {
    return (
        <StyledLink>
            Air
        </StyledLink>
    )
};

export default withRouter(AirLink);
