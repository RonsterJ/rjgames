import React from 'react'


import './dashboard.css'


function Dashboard(props) {
    const logout = props.logout
    return (
    <>
        <div id='dashContainer' className={"dash-container "+ props.dashHide}>
            <div className='dashContTop'>
                <div className='profile-pic'></div>
                <div className='while-away'>
                    <h4>welcome {props.currentUser.username}</h4>
                    <button id='logout' onClick={logout}>Log Out</button>
                </div>
            </div>
            <div className='dashToggle'>
                <button id="expand-button" onClick={props.toggle}>exp</button>
            </div>
        </div>
    </>      
)
}


export default Dashboard;
    // <>
    //     <div id='dashContainer' className={"dash-container "+ props.dashHide}>
    //         <div className='profile-pic'></div>
    //         <div className='while-away'>
    //             <h4>welcome {props.username}</h4>
    //         </div>
    //     </div>
    // </>        
   