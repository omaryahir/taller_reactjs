/*
 * Module dependencies
 */

import React from 'react';

export default class GokuMessage extends React.Component
{
    render() 
    {
        return <li className="gokumessage">{this.props.message.text}</li>
    }
}
