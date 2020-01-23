import React from 'react';
import ReactDOM from 'react-dom';
import './style/reset.css';
import './style/font.css'
import './style/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();