// REACT IMPORTS
import { hot } from 'react-hot-loader/root';
import React, { Suspense, lazy } from 'react';
import { Redirect } from '@reach/router';

// APOLLO IMPORTS
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

// STYLES IMPORTS
import { ThemeProvider } from 'styled-components';
import theme from './theme';

// PAGE ANIMATIONS
import AnimatedRouter from './components/animations/AnimatedSwitch';
import { RouteLoader} from './components/animations/Loaders';

// GLOBAL UI COMPONENTS
import Header from './components/header';
import Notifications from './components/notifications';
import Compass from './components/compass';
import FloatingMenu from './components/menu';

// LAZY LOADED ROUTES
const Landing = lazy(() => import('./containers/Landing'));
const Home = lazy(() => import('./containers/Home'));
const Air = lazy(() => import('./containers/Air'));
const Earth = lazy(() => import('./containers/Earth'));
const Water = lazy(() => import('./containers/Water'));
const Profile = lazy(() => import('./containers/Profile'));
const Devices = lazy(() => import('./containers/Devices'));

const client = new ApolloClient({
	uri: 'http://localhost:3000/graphql',
});

const user = {
	loggedIn: true,
};

const App = () => {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<>
					{!user.loggedIn && <Redirect to="/landing" />}
					<Header />
					<Notifications />
					<Suspense fallback={<RouteLoader/>}>
						<AnimatedRouter>
							<Landing path="/landing" />
							<Home path="/home" />
							<Air path="/air" />
							<Earth path="/earth" />
							<Water path="/water" />
							<Profile path="/profile/:section" />
							<Devices path="/devices" />
						</AnimatedRouter>
					</Suspense>
					<FloatingMenu />
					<Compass />
				</>
			</ThemeProvider>
		</ApolloProvider>
	);
};

export default hot(App);
