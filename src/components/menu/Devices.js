import React, { Suspense } from 'react';
import styled from 'styled-components';
import { List, Dialog, Slide, AppBar, Toolbar } from '@material-ui/core';
import { Device } from './Device';

const StyledList = styled(List)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 70px !important;
`;

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const devices = [
	{
		name: 'Arduino',
		largeThumbnail: 'https://via.placeholder.com/160',
		smallThumbnail: 'https://via.placeholder.com/50',
		description: 'Fuck it up ooh ooh',
		info: {},
		status: 'CONNECTED',
		lastUse: '11/27/1991',
	},
	{
		name: 'Arduino',
		largeThumbnail: 'https://via.placeholder.com/160',
		smallThumbnail: 'https://via.placeholder.com/50',
		description: 'Fuck it up ooh ooh',
		info: {},
		status: 'DISCONNECTED',
		lastUse: '11/27/1991',
	},
	{
		name: 'Arduino',
		largeThumbnail: 'https://via.placeholder.com/160',
		smallThumbnail: 'https://via.placeholder.com/50',
		description: 'Fuck it up ooh ooh',
		info: {},
		status: 'DISCONNECTED',
		lastUse: '11/27/1991',
	},
];

const DevicesDialog = ({ open, handleClose }) => {
	return (
		<Suspense fallback={<div>Load...</div>}>
			<Dialog
				open={open}
				onClose={handleClose}
				fullScreen
				TransitionComponent={Transition}
				arialabelledby="devices-dialog"
			>
				<AppBar>
					<Toolbar>
						<div onClick={handleClose}>DDDD</div>
					</Toolbar>
				</AppBar>
				<StyledList>
					{devices.map(device => (
						<Device {...device} thumbnail={device.largeThumbnail} />
					))}
				</StyledList>
			</Dialog>
		</Suspense>
	);
};

export default DevicesDialog;
