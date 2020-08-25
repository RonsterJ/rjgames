import React from 'react'
import Login from '../Auth/Login'

import './landing.css'

export default function Landing(props) {
    function confPass() {
        document.getElementById('confPass').classList.remove('hidden')
        document.getElementById('formP').classList.add('hidden')
        document.getElementById('emailField').classList.remove('hidden')
    }
    return (
        <div id='landingContainer' className={'landingContainer ' + props.landingContainer}>
            <div className='aboutApp'></div>
            <Login />
        </div>
    )
}

            // <div className='authForm'>
            //     <form>
            //         <input type='text' placeholder='username'></input>
            //         <input id='emailField' type='text' className='hidden' placeholder='email'></input>
            //         <input type='text' placeholder='password'></input>
            //         <input id='confPass' type='text' className='hidden' placeholder='confirm password'></input>
            //         <button onClick={props.authenticate}>Log In</button>
            //         <p id='formP'>not a member? <a href='#' onClick={confPass}>Join!</a></p>
            //     </form>
            // </div>            