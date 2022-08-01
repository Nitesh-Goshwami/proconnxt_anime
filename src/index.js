import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from 'react-redux';
// import { store } from './Componenets/App/Store';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
    useRefreshTokens="true"
  >
    <BrowserRouter >
      {/* <Provider> */}
        <App />
      {/* </Provider> */}
    </BrowserRouter >
  </Auth0Provider>
);


