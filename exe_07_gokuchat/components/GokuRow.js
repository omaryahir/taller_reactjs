/*
 * Module dependencies
 */

import React from 'react';
import GokuPicture from './GokuPicture';

export default class GokuRow extends React.Component
{

    onClick(ev)
    {
        this.props.growl(this.props.name);
    }

    render()
    {
        var font_face = `Arial`;
        return <li className='gokurow' onClick={this.onClick.bind(this)}>
            <GokuPicture number={this.props.number} />
            <b>{this.props.name}</b>
         </li>;
    }
};
