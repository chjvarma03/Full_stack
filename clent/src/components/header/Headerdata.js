import React from 'react';
import { Fragment } from 'react';

const Headerdata = () => {
  return <Fragment>
       <div className='navbar'>

        <div id ="logohead"><span id="logofront">Crypto</span>Market</div>
        <div className='options'>
         <ul className='optionsul'>
        <li><button id="btn1"><a href='/myportfolio'>My Portfolio</a></button></li>
        <li><button id="btn2"><a href ="/sign in">Sign in</a></button></li>
        <li><button id="btn3"><a href="/myprofile">My profile</a></button></li>
        </ul>
    </div>
       </div>
  </Fragment>
}

export default Headerdata
