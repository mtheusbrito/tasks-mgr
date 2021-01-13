import './config/ReactotronConfig';
import { ThemeProvider } from '@material-ui/core';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import theme from './theme';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/* persistorGate, renderiza somente apos buscar dados da api */}
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <Routes />
            <GlobalStyle />
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
export default App;
