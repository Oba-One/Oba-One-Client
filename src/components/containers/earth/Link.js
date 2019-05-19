import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`

`;

const EarthLink = ({})  => {
    return (
        <StyledLink>
            Earth
        </StyledLink>
    )
};

export default withRouter(EarthLink);
