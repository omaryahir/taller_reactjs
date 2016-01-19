/*
 * Module dependencies
 */

import React from 'react';

export default class GokuPicture extends React.Component
{
    render () 
    {
        var url = `http://www.myfavoritegames.com/dragonball-z/Images/Transformations/Saiyans/SuperSaiyan${this.props.number}.jpg`;
        return <img src={url} className="goku_picture" />;
    }
}