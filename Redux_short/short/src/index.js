import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';


import store from './js/store/';
import { addArticle } from './js/actions/action';

window.store = store;
window.addArticle = addArticle; 



ReactDOM.render(
    <Provider store={ store } >
    <App />
    </Provider>,
    
    document.getElementById('root'));
registerServiceWorker();
