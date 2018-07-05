import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import configureStore from './store/configureStore';
import {provider} from 'react-redux';
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const store = configureStore();

render(
    <provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </provider>,
    document.getElementById('app')
); 