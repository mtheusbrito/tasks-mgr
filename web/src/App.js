import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { Router } from 'react-router-dom';
import theme from './theme';

import Routes from './routes';
import { history } from './services/history';
import './config/ReactotronConfig';
import GlobalStyle from './styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
}
export default App;
