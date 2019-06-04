import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Dial from './Dial';

const Container = styled.div`
	position: absolute;
`;
const actions = [];

const FloatingMenu = ({}) => {
	return (
		<Container>
			<Dial actions={actions} />;
		</Container>
	);
};

export default FloatingMenu;
