import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`

`;

const ProfileLink = ({})  => {
    return (
        <StyledLink>
            Profile
        </StyledLink>
    )
};

export default withRouter(ProfileLink);
