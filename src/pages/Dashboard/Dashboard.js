import React from 'react'

import './dashboard.css'

export default function Dashboard(props) {
    return (
    <>
        <div id='dashContainer' className={"dash-container "+ props.dashHide}>
            <div className='profile-pic'></div>
            <div className='while-away'></div>            
        </div>
        <div id='articleContainer' className={'articleContainer ' + props.articlesExpand}>
            <button id="expand-button" onClick={props.toggle}>exp</button>
        </div>
    </>        
    )
}
