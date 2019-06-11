import { createContext } from 'react';

const AppContext = createContext({});

export const ThemeProvider = AppContext.Provider;
export const ThemeConsumer = AppContext.Consumer;

export default AppContext;
