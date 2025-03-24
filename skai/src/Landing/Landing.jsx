import React from 'react'
import "./Landing.css";
import Logo from "../Assets/QuesLogo 1.png";
import SoloLogo from "../Assets/Group 22.png";
const Landing = () => {
  return (
    <div className='containerParent'>
        <div className='leftPart'>
            <div className='logo'><img src={Logo}/></div>
            <div className='textLeftFirst'>
              <p>Your podcast
                will no longer
                be just a hobby.</p>
            </div>
            <div className='textLeftSecond'>
              <p>Supercharge Your Distribution
                 using our AI assistant!</p>
            </div>
        </div>
        <div className='rightPart'>
            <div><img src={SoloLogo}/></div>
            <div className='logoTxt'>
              <p>Welcome to
                <br/> <strong>Ques.AI</strong></p>
            </div>
          
            <form className='form'>
              <input type='email' placeholder='Email Address'/>
              <input type='password' placeholder='Password'/>
              <div>
                <div className='checkBox'><input type='checkbox'/>Remember me</div>
              <p>Forgot password?</p>
              </div>
            </form>
            <button type='submit'>Login</button>
        </div>
    </div>
  )
}

export default Landing

