/* 
 * Module dependencies
 */

import React from 'react';
import GokuMessage from './GokuMessage';

export default class GokuChat extends React.Component 
{
    render ()
    {
        return <ul className="gokuchat">
            {
                this.props.messages.map((message) => 
                {
                    return <GokuMessage key={message.id} message={message} />
                })
            }
        </ul>
    }
}


GokuChat.defaultProps = { messages: [] };