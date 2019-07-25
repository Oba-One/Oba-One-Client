import React, { Suspense } from 'react';
import styled from 'styled-components';
import { List, Dialog } from '@material-ui/core';
import { QuickConnectDevice } from './Device';

const StyledList = styled(List)`
	display: flex;
	flex-direction: column;
	padding: 0 !important;
	width: 300px;
`;

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

const QuickConnectDialog = ({ open, handleClose }) => {
	return (
		<Suspense fallback={<div>Load...</div>}>
			<Dialog
				open={open}
				onClose={handleClose}
				scroll="paper"
				maxWidth="lg"
				arialabelledby="quick-connect-dialog"
			>
				<StyledList>
					{devices.map(device => (
						<QuickConnectDevice {...device} thumbnail={device.smallThumbnail} />
					))}
				</StyledList>
			</Dialog>
		</Suspense>
	);
};

export default QuickConnectDialog;
