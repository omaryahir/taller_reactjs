/*
 * Module dependencies
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ImageGrid from './components/ImageGrid';
import ImageAction from './actions/ImageActions';

// 5 segundos: actualice !

setTimeout(() => {
    ImageActions.fetchList();
}, 5000);


ReactDOM.render(<ImageGrid></ImageGrid>, document.getElementById('container'));
