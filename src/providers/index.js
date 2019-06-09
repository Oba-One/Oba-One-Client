// REACT IMPORTS
import React from 'react'

// APOLLO IMPORTS
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

// STYLES IMPORTS
import { ThemeProvider as StyledProvider } from 'styled-components';
import {
	StylesProvider as StylesInject,
	ThemeProvider as MaterialUIProvider,
} from '@material-ui/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider as StyledCompProvider } from 'styled-components';
import theme from '../providers';

const materialTheme = responsiveFontSizes(createMuiTheme());

const client = new ApolloClient({
	uri: '',
});

const Providers = (props) => {
	return (
		<ApolloProvider client={client}>
			<StylesInject injectFirst>
				<MaterialUIProvider theme={materialTheme}>
					<StyledCompProvider theme={theme}>{children => (
                        props.children(prop)
                    )}</StyledCompProvider>
				</MaterialUIProvider>
			</StylesInject>
		</ApolloProvider>
	);
};

export default Providers;
``