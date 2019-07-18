import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';

const StyledDial = styled(SpeedDial)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 120px;
`;

const Dial = ({ children, className = {} }) => {
	const [open, setOpen] = useState(false);

	return (
		<StyledDial
			ariaLabel="SpeedDial example"
			className={className}
			icon={<SpeedDialIcon />}
			onBlur={() => setOpen(false)}
			onClick={() => setOpen(!open)}
			onClose={() => setOpen(false)}
			onFocus={() => setOpen(true)}
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
			open={open}
		>
			{children}
		</StyledDial>
	);
};

Dial.propTypes = {
	className: PropTypes.object,
};

export default Dial;
