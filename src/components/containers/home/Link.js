import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`

`;

const HomeLink = ({})  => {
    return (
        <StyledLink>
            Home
        </StyledLink>
    )
};

export default withRouter(HomeLink);
