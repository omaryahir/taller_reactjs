/*
 * Module dependencies
 */

import React from 'react';
import ReactDOM from 'react-dom';
import GokuTable from './components/GokuTable';

var gokus = [
    { number:1, name: 'Super Saiyan 1' },
    { number:2, name: 'Super Saiyan 2' },
    { number:3, name: 'Super Saiyan 3' },
    { number:4, name: 'Super Saiyan 4' },
];

ReactDOM.render(<GokuTable gokurows={gokus} />, document.getElementById('container'));
