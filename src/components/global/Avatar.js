import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Avatar as MuiAvatar } from '@material-ui/core';

const StyledAvatar = styled(MuiAvatar)``;

const Avatar = ({ className, src = '', alt = '', sizes = [] }) => (
	<StyledAvatar className={className} src={src} alt={alt} sizes={sizes} />
);

Avatar.propTypes = {
	className: PropTypes.object,
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	sizes: PropTypes.array,
};

export default Avatar;
