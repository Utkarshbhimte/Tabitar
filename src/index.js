import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';
import App from './components/app';
import chordViewer from './components/chord-viewer';
import tabsViewer from './components/tabs-viewer';

// const repo = `/${window.location.pathname.split('/')[1]}`;

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match pattern="/" component={App} />
                <Match pattern="/chord/:id" component={chordViewer} />
                <Match pattern="/tabs/:id" component={tabsViewer} />

            </div>
        </BrowserRouter>
    )
}

render(<Root/>, document.querySelector('#main'));
