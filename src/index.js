import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Navigation from './Navigation'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
