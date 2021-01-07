import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { Router } from 'react-router-dom';
import Routes from './routes';
import { history } from './services/history';
import './config/ReactotronConfig';
import GlobalStyle from './styles/global';

function App() {
  return (
    <ThemeProvider>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
}
export default App;
