// REACT IMPORTS
import { hot } from 'react-hot-loader/root';
import React, { Suspense, lazy } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

// APOLLO IMPORTS
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

// STYLES IMPORTS
import {
	StylesProvider,
	ThemeProvider as MaterialProvider,
} from '@material-ui/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider as StyledProvider } from 'styled-components';
import theme from './theme';
const materialTheme = responsiveFontSizes(createMuiTheme());

// PAGE ANIMATIONS
import AnimatedSwitch from './components/animations/global/AnimatedSwitch';

// GLOBAL UI COMPONENTS
import Header from './components/header';
import Notifications from './components/notifications';
import Compass from './components/compass';

// LAZY LOADED ROUTES
const Landing = lazy(() => import('./containers/Landing'));
const Home = lazy(() => import('./containers/Home'));
const Profile = lazy(() => import('./containers/Profile'));
const Air = lazy(() => import('./containers/Air'));
const Earth = lazy(() => import('./containers/Earth'));
const Water = lazy(() => import('./containers/Water'));

const client = new ApolloClient({
	uri: '',
});

const user = {
	loggedIn: true,
};

const App = () => {
	return (
		<Router>
			<ApolloProvider client={client}>
				<StylesProvider injectFirst>
					<MaterialProvider theme={materialTheme}>
					<StyledProvider theme={theme}>
						<Suspense fallback={<div>Thematic Loading</div>}>
							<Header />
							<Notifications />
							<Switch>
								<Route
									exact
									path="/landing"
									render={props => <Landing {...props} />}
								/>
								<Route
									exact
									path="/home"
									render={props => <Home {...props} />}
								/>
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
					</StyledProvider>
					</MaterialProvider>
				</StylesProvider>
			</ApolloProvider>
		</Router>
	);
};

export default hot(App);
