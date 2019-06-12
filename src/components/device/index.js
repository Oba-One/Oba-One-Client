import React, { Suspense, lazy } from 'react';

import Pane from './Pane';
import Init from './Init';

const Dashboard = lazy(() => import('./Dashboard'));
const Remote = lazy(() => import('./Remote'));
const Stream = lazy(() => import('./Stream'));
const Settings = lazy(() => import('./Settings'));

const DevicePane = ({}) => {
	return (
		<Pane>
			<Suspense fallback={<div>Loading Device Page</div>}>
				<Init />
			</Suspense>
		</Pane>
	);
};

export default DevicePane;
