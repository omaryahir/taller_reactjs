/*
 * Module dependencies
 */

import React from 'react';
import GokuRow from './GokuRow';

export default class GokuTable extends React.Component
{
    render ()
    {
        return <ul className="goku_table">
            {
                this.props.gokurows.map((gokurow) => {
                    return <GokuRow key={gokurow.number} name={gokurow.name} number={gokurow.number} />
                })
            }
        </ul>;
    }
}
