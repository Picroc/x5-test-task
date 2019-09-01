import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/main-page/main-page';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './model/reducers';

const store = createStore(App);

ReactDOM.render(
    <Provider store={store}>
        <MainPage />
    </Provider>,
    document.getElementById('root'));