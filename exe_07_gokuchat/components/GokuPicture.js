/*
 * Module dependencies
 */

import React from 'react';

export default class GokuPicture extends React.Component
{
    render () 
    {
        var url = `http://www.myfavoritegames.com/dragonball-z/Images/Transformations/Saiyans/SuperSaiyan${this.props.number}.jpg`;
        return <div className="avatar-container">
            <img src={url} className="avatar" />
        </div>
    }
}