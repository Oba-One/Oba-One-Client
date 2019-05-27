// REACT IMPORTS
import { hot } from 'react-hot-loader/root';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// APOLLO IMPORTS
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

// STYLES IMPORTS
import { ThemeProvider } from 'styled-components';
import theme from './theme';

// GLOBAL UI COMPONENTS
import Header from './components/header';
import Notifications from './components/notifications';
import Compass from './components/compass';

// LAZY LOADED ROUTES
const Landing = lazy(() => import(/* webpackPrefetch: false */ './containers/Landing'));
const Home = lazy(() => import(/* webpackPrefetch: false */ './containers/Home'));
const Profile = lazy(() => import(/* webpackPrefetch: false */ './containers/Profile'));
const Air = lazy(() => import(/* webpackPrefetch: false */ './containers/Air'));
const Earth = lazy(() => import(/* webpackPrefetch: false */ './containers/Earth'));
const Water = lazy(() => import( /* webpackPrefetch: false */ './containers/Water'));

const client = new ApolloClient({
	uri: '',
});

const App = () => {
	return (
		<Router>
			<ApolloProvider client={client}>
				<ThemeProvider theme={theme}>
					<Suspense fallback={<div>Loading</div>}>
						<Header />
						<Notifications />
						<Switch>
							<Route exact path="/" render={props => <Landing {...props} />} />
							<Route exact path="/home" render={props => <Home {...props} />} />
							<Route exact path="/air" render={props => <Air {...props} />} />
							<Route
								exact
								path="/earth"
								render={props => <Earth {...props} />}
							/>
							<Route
								exact
								path="/water"
								render={props => <Water {...props} />}
							/>
							<Route
								exact
								path="/profile"
								render={props => <Profile {...props} />}
							/>
						</Switch>
						<Compass />
					</Suspense>
				</ThemeProvider>
			</ApolloProvider>
		</Router>
	);
};

export default hot(App);
