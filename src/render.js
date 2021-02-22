import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, upgradePostText} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

export let renderPage = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}
                     upgradePostText={upgradePostText} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}