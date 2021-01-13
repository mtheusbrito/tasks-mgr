import './config/ReactotronConfig';
import { ThemeProvider } from '@material-ui/core';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import theme from './theme';
import Routes from './routes';
import history from './services/history';

import GlobalStyle from './styles/global';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}
export default App;
