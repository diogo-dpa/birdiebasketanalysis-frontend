import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <ToastProvider autoDismiss
      autoDismissTimeout={5000}>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </ToastProvider>
  </>
);

export default App;
