/*
 * Module dependencies
 */

import React from 'react';
import GokuPicture from './GokuPicture';

export default class GokuRow extends React.Component
{
    render()
    {
        var font_face = `Arial`;
        return <li className='goku_row'>
            <GokuPicture number={this.props.number} />
            <b>{this.props.name}</b>
         </li>;
    }
};
