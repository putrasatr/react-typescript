import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Router } from 'react-router-dom';
import "@egjs/flicking-plugins/dist/flicking-plugins.css";

import './index.css';
import "./scss/styles.scss";
import history from "./history"
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';

const queryClient = new QueryClient()

ReactDOM.render(
  <React.Fragment>
    <QueryClientProvider client={queryClient}>
      <Router history={history}>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </Router>
    </QueryClientProvider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
