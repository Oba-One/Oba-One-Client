import React from 'react';
import { Popover as Modal } from '@material-ui/core';

const Popover = ({ children, className, open, anchorEl, handleClose }) => (
	<Modal
		className={className}
		open={open}
		anchorEl={anchorEl}
		onClose={handleClose}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'center',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'center',
		}}
	>
		{children}
	</Modal>
);

export default Popover;
