import React from 'react';
import styled from 'styled-components';
import Animation from 'react-loaders';

import Container from '../global/Container';

const Loader = ({ type = 'ball-pulse-rise', color = 'white' }) => (
	<Container>
		<Animation type={type} color={color} />
	</Container>
);

export default Loader;