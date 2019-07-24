import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

const Dial = ({ actions = [{ name: '', icon: () => {} }], className = {} }) => {
	const [open, setOpen] = useState(false);
	return (
		<SpeedDial
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
			{actions.map(action => (
				<SpeedDialAction
					key={action.name}
					icon={action.icon}
					tooltipTitle={action.name}
					onClick={() => setOpen(!open)}
				/>
			))}
		</SpeedDial>
	);
};

export default Dial;
