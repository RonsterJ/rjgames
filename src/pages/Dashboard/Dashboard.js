import React from 'react'
import { Link } from 'react-router-dom'

import './dashboard.css'


function Dashboard(props) {
    const logout = props.logout
    
    // const home = props.history.push('/dashboard')
    console.log(props)
    if (props.currentUser) {
    return (
    <>
        <div id='dashContainer' className={"dash-container "+ props.dashHide}>
            <div className='dashContTop'>
                <div className='profile-pic'></div>
                <div className='while-away'>
                    <h4>welcome {props.currentUser.username}</h4>
                    <Link to='/dashboard'><button id='home'>Home</button></Link>
                    <button id='logout' onClick={logout}>Log out</button>
                </div>
            </div>
        </div>
    </>      
)} else return null;
}


export default Dashboard;       
   