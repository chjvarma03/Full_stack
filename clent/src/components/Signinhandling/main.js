import React, { Fragment, useState } from 'react'
import Signin from '../Sign in';
import Signup from '../Sign up';
const Main = (props) => {
    let value = props.value;
  return (
    <Fragment>
        {value?<Signin/>:<Signup/>}
    </Fragment>
  )
}

export default Main;
