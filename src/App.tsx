import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import theme from './theme';
import { UserView } from './views';

const App = () => {
  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <UserView></UserView>
    </ThemeProvider>
  );
};

export default App;
