import React from 'react';
import PropTypes from 'prop-types';
import { Dialog as MuiDialog } from '@material-ui/core';

const Dialog = ({ children, className, open, handleClose, arialabelledby }) => (
	<MuiDialog
		className={className}
		open={open}
		handleClose={handleClose}
		aria-labelledby={arialabelledby}
	>
		{children}
	</MuiDialog>
);

Dialog.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	children: PropTypes.node,
	className: PropTypes.object,
};

export default Dialog;
