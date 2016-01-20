/* 
 * Module dependencies
 */

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import GokuMessage from './GokuMessage';

export default class GokuChat extends React.Component 
{
    render ()
    {
        return <ul className="gokuchat">
            <ReactCSSTransitionGroup transitionName="message-animation" transitionEnterTimeout={500}>
            {
                this.props.messages.map((message) => 
                {
                    return <GokuMessage key={message.id} message={message} />
                })
            }
            </ReactCSSTransitionGroup>
        </ul>
    }
}


GokuChat.defaultProps = { messages: [] };
