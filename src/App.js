// REACT IMPORTS
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

// APOLLO IMPORTS
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// STYLES IMPORTS
import { ThemeProvider } from 'styled-components';
import theme from './theme';

// LAZY LOADED ROUTES
const Landing = lazy(() => import('./containers/Landing'));
const Home = lazy(() => import('./containers/Home'));
const Profile = lazy(() => import('./containers/Profile'));
const Air = lazy(() => import('./containers/Air'));
const Earth = lazy(() => import('./containers/Earth'));
const Water = lazy(() => import('./containers/Water'));

const client = new ApolloClient({
	uri: ''
})

const App = () => {
	return (
		<Router
			getUserConfirmation={null}
			his
		>
			<ApolloProvider client={client}>
				<ThemeProvider theme={theme}>
					<Suspense fallback={<div>Loading</div>}>
						<nav> Full Width Top Navigation loads if desktop or tablet</nav>
						<aside>Notifications loads if not landing page</aside>
						<Switch>
							<Route exact path="/" render={props => <Landing {...props} />} />
							<Route exact path="/home" render={props => <Home {...props} />} />
							<Route exact path="/air" render={props => <Air {...props} />} />
							<Route exact path="/earth" render={props => <Earth {...props} />} />
							<Route exact path="/water" render={props => <Water {...props} />} />
							<Route
								exact
								path="/profile"
								render={props => <Profile {...props} />}
							/>
						</Switch>
						<nav>
							centered Bottom Navigation loads if not landing or settings
						</nav>
					</Suspense>
				</ThemeProvider>
			</ApolloProvider>
		</Router>
	);
};

export default hot(App);
