import React from 'react'

import './Article.css'

export default function Articles(props) {
    return (
        <div id='articleContainer' className={'articleContainer ' + props.articlesExpand}>
            <button id="expand-button" onClick={props.toggle}>exp</button>
        </div>
    )
}
