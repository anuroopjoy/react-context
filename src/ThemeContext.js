import * as React from 'react';

const ThemeContext = React.createContext({ theme: 'light' });
ThemeContext.displayName = 'Theme';

export const ThemeProvider = ThemeContext.Provider;

export default ThemeContext;
