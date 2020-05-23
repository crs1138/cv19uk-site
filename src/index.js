import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Helmet } from 'react-helmet';

ReactDOM.render(
  <React.StrictMode>
    <Helmet
      defaultTitle='CV19-UK-Timeline'
      titleTemplate="%s | CV19-UK-Timeline"
    >
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
      <link rel="canonical" href="https://crs1138.github.io/cv19-uk-timeline"/>
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
